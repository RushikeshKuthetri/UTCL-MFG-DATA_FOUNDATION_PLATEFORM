import { TextContainerWithWrapWord,   TransparentBoxWithGate, BlackContainer, PipeWithCircles, MimicCaret, MotorCircleDigitalTag, BlueContainerWithDynamicBorder } from "../../../index";

import { useBorderTagsColorStatus, useCaretColorStatus, useColorStatus, useFanImgTagsColorStatus } from "../../../../utils";

export const PackingPlantPanipat = () => {
  return (
    <div className="PanipatPackingPlant w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
      <BlackContainer
          data={{
            label: "PP_641BE1_KW",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
            <BlackContainer
          data={{
            label: "PP_641BE1_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="pipe dotted-pipe mt-3"></div>
      </div>
      <div className="position-absolute single-text-2">
      <BlackContainer
          data={{
            label: "PP_641BE2_KW",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
            <BlackContainer
          data={{
            label: "PP_641BE2_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="pipe dotted-pipe mt-3"></div>
      </div>
      <div className="position-absolute single-text-3">
      <BlackContainer
          data={{
            label: "PP_641BE3_II",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
            <BlackContainer
          data={{
            label: "PP_641BE3_KW",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="pipe dotted-pipe mt-3"></div>
      </div>
      
      <PipeWithCircles parentDivClass="hpipecircle mt-2 position-absolute single-text-4" text={{ useClass: "text-dark mx-auto", label: "641ASA" }} />
      <PipeWithCircles parentDivClass="hpipecircle mt-2 position-absolute single-text-5" text={{ useClass: "text-dark mx-auto", label: "641ASB" }} />
      <div className=" position-absolute single-text-6 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "641PD1",
          }}
        />
        <div className={`square mt-2 grey-color`}></div>
      </div>
   
      <div className="position-absolute single-text-8 d-flex">
        <div>
        <div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "641BF1",
            }}
          />
        <div className="containerImage text-center pt-3">
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <div className="yellowline-Hr position-absolute line-2"></div>
        </div>
        <div className="d-flex ml-3">
          <div className="circle-img c-grey-img-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "641RA1",
            }}
          />
        </div>
        </div>
        <div className="position-absolute single-text-7">
        <div className="connector-icon  justify-content-start pl-1">
          <div className="line-circle grey-color"></div>
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: " 641FNE",
          }}
        />
      </div>
      </div>
      <div>
        <div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "642BF1",
            }}
          />
        <div className="containerImage text-center pt-3">
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <div className="yellowline-Hr position-absolute line-2"></div>
        </div>
        <div className="d-flex ml-3">
          <div className="circle-img c-grey-img-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "642RA1",
            }}
          />
        </div>
        </div>
        <div className="position-absolute single-text-7">
        <div className="connector-icon  justify-content-start pl-1">
          <div className="line-circle grey-color"></div>
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "642FN1",
          }}
        />
      </div>
      </div>
      <div>
        <div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "643BF1",
            }}
          />
        <div className="containerImage text-center pt-3">
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <div className="yellowline-Hr position-absolute line-2"></div>
        </div>
        <div className="d-flex ml-3">
          <div className="circle-img c-grey-img-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "643RA1",
            }}
          />
        </div>
        </div>
        <div className="position-absolute single-text-7">
        <div className="connector-icon  justify-content-start pl-1">
          <div className="line-circle grey-color"></div>
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "643FN1",
          }}
        />
      </div>
      </div>
      <div>
        <div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "644BF1",
            }}
          />
        <div className="containerImage text-center pt-3">
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <div className="yellowline-Hr position-absolute line-2"></div>
        </div>
        <div className="d-flex ml-3">
          <div className="circle-img c-grey-img-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "644RA1",
            }}
          />
        </div>
        </div>
        <div className="position-absolute single-text-7">
        <div className="connector-icon  justify-content-start pl-1">
          <div className="line-circle grey-color"></div>
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "644FN1",
          }}
        />
      </div>
      </div>
      


 
      </div>

      <div className=" position-absolute single-text-9 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE1_ZS")}`} label="PP_641BE1_ZS" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE1_TS")}`} label="PP_641BE1_TS" />
      </div>
      <div className=" position-absolute single-text-10 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE1_BSS03")}`} label="PP_641BE1_BSS03" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE1_BSS04")}`} label="PP_641BE1_BSS04" />
      </div>
      <MotorCircleDigitalTag className={`square mt-3 digital-tag mx-auto position-absolute single-text-11 ${useColorStatus("PP_641BE1_LH")}`} label="PP_641BE1_LH" />
      <div className=" position-absolute single-text-12 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE1_BSS01")}`} label="PP_641BE1_BSS01" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE1_BSS02")}`} label="PP_641BE1_BSS02" />
      </div>
         <div className="position-absolute single-text-13 d-flex">
          <div>
   
    <TransparentBoxWithGate				
           isClickable={true}				
           parentClass="mx-auto mt-4"				
            squareProps={{				
            tagLabel: "PP_641DV3",				
            squareClass: `${useColorStatus("PP_641DV3")}`,				
          }}				
           />
                <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "641DV3",
          }}
        />
           </div>
           <div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "641DV4",
          }}
        />
    <TransparentBoxWithGate				
           isClickable={true}				
           parentClass="mx-auto mt-1"				
            squareProps={{				
            tagLabel: "PP_641DV4",				
            squareClass: `${useColorStatus("PP_641DV4")}`,				
          }}				
           />
           </div>
           </div>
           <div className="position-absolute single-text-14 d-flex">
          <MotorCircleDigitalTag className={`dot p-2  digital-tag ${useColorStatus("PP_641BE1")}`} label="PP_641BE1" text="M" />
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "641BE1",
            }}
          />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <div>
        <div className="containerImage text-center pt-3">
        <MotorCircleDigitalTag className={`dot p-2 mx-auto digital-tag ${useColorStatus("PP_641RP1_FB1")}`} label="PP_641RP1_FB1" text="M" />
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <PipeWithCircles parentDivClass="hpipecircle mt-3" text={{ useClass: "text-dark mx-auto", label: "641SC1" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "",
          }} />
        </div>
        <div>
        <div className="containerImage text-center pt-3">
        <MotorCircleDigitalTag className={`dot p-2 mx-auto digital-tag ${useColorStatus("PP_642RP1_FB1")}`} label="PP_642RP1_FB1" text="M" />
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <PipeWithCircles parentDivClass="hpipecircle mt-3" text={{ useClass: "text-dark mx-auto", label: "642SC1" }} 
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "",
          }}
        />
            <PipeWithCircles parentDivClass="hpipecircle hpipecircle1 mt-3" text={{ useClass: "text-dark mx-auto", label: "642SC2" }} 
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "",
          }}
        />
        </div>
        <div>
        <div className="containerImage text-center pt-3">
        <MotorCircleDigitalTag className={`dot p-2 mx-auto digital-tag ${useColorStatus("NA")}`} label="NA" text="M" />
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <PipeWithCircles parentDivClass="hpipecircle mt-3" text={{ useClass: "text-dark mx-auto", label: "643SC1" }} 
          secondCircle={{
            secondCircleClass: `dot digital-tag grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "NA",
          }}
        />
            <PipeWithCircles parentDivClass="hpipecircle hpipecircle1 mt-3" text={{ useClass: "text-dark mx-auto", label: "643SC2" }} 
          secondCircle={{
            secondCircleClass: `dot digital-tag grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "NA",
          }}
        />
        </div>
        <div>
        <div className="containerImage text-center pt-3">
        <MotorCircleDigitalTag className={`dot p-2 mx-auto digital-tag ${useColorStatus("PP_644RP1_FB1")}`} label="PP_644RP1_FB1" text="M" />
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <PipeWithCircles parentDivClass="hpipecircle mt-3" text={{ useClass: "text-dark mx-auto", label: "644SC1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "NA",
          }}
        />
        </div>


  
      </div>
      <div className=" position-absolute single-text-16 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE2_ZS")}`} label="PP_641BE2_ZS" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE2_TS")}`} label="PP_641BE2_TS" />
      </div>
      <div className=" position-absolute single-text-17 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE2_BSS02")}`} label="PP_641BE2_BSS02" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE2_BSS01")}`} label="PP_641BE2_BSS01" />
      </div>
      <MotorCircleDigitalTag className={`square mt-3 digital-tag mx-auto position-absolute single-text-18 ${useColorStatus("PP_641BE2_LH")}`} label="PP_641BE2_LH" />
      <div className=" position-absolute single-text-19  d-flex">
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE2_BSS04")}`} label="PP_641BE2_BSS04" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE2_BSS03")}`} label="PP_641BE2_BSS03" />
      </div>

     
      <PipeWithCircles parentDivClass="hpipecircle mt-2 position-absolute single-text-20" text={{ useClass: "text-dark mx-auto", label: "641ASB" }} />
      <PipeWithCircles parentDivClass="hpipecircle mt-2 position-absolute single-text-21" text={{ useClass: "text-dark mx-auto", label: "641AS9" }} />
      <PipeWithCircles parentDivClass="hpipecircle mt-2 position-absolute single-text-22" text={{ useClass: "text-dark mx-auto", label: "" }} />
   
      <div className=" position-absolute single-text-23 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "641PD2",
          }}
        />
        <div className={`square mt-2 grey-color`}></div>
      </div>
      <div className="position-absolute single-text-24">
        <div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "641BE2",
            }}
          />
          <MotorCircleDigitalTag className={`dot p-2 mx-auto digital-tag ${useColorStatus("NA")}`} label="NA" text="M" />
          </div>
      </div>
      <div className=" position-absolute single-text-25 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE3_ZS")}`} label="PP_641BE3_ZS" />
      </div>
      <div className=" position-absolute single-text-26 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE3_BSS02")}`} label="PP_641BE3_BSS02" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE3_BSS01")}`} label="PP_641BE3_BSS01" />
      </div>
      <div className=" position-absolute single-text-27 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE3_LH")}`} label="PP_641BE3_LH" />
      </div>
      <div className=" position-absolute single-text-28 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE3_BSS04")}`} label="PP_641BE3_BSS04" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("PP_641BE3_BSS03")}`} label="PP_641BE3_BSS03" />
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "641BE3",
            }}
          />
          <MotorCircleDigitalTag className={`dot p-2 mx-auto digital-tag ${useColorStatus("NA")}`} label="NA" text="M" />
          </div>
          <MotorCircleDigitalTag className={`dot p-2 mt-4   digital-tag ${useColorStatus("NA")}`} label="NA" text="M" />

      </div>
      <PipeWithCircles parentDivClass="hpipecircle mt-2 position-absolute single-text-30" text={{ useClass: "text-dark mx-auto", label: "641ASC" }} />
      <PipeWithCircles parentDivClass="hpipecircle mt-2 position-absolute single-text-31" text={{ useClass: "text-dark mx-auto", label: "641ASD" }} />
      <div className=" position-absolute single-text-32 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-3",
            label: "641PD3",
          }}
        />
        <div className={`square mt-2 grey-color`}></div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div className="d-flex">
        <div className="img-109 mr-5"></div>
        <div className="single-text-34">
        <BlackContainer
          data={{
            label: "PP_641FB1_WI",
            useClass: "greenTxt mt-2",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
           <BlackContainer
          data={{
            label: "PP_641FB1_TE",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        </div>
        </div>
        <div className="d-flex">
        <div className="img-109 mr-5"></div>
        <div className="single-text-34">
        <BlackContainer
          data={{
            label: "PP_642FB1_WI",
            useClass: "greenTxt mt-2",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
           <BlackContainer
          data={{
            label: "PP_642FB1_TE",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        </div>
        </div>
        <div className="d-flex">
        <div className="img-109 mr-5"></div>
        <div className="single-text-34">
        <BlackContainer
          data={{
            label: "PP_643FB1_WI",
            useClass: "greenTxt mt-2",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
           <BlackContainer
          data={{
            label: "PP_643FB1_TE",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        </div>
        </div>
        <div className="d-flex ml-4">
        <div className="img-109 mr-5"></div>
        <div className="single-text-34">
        <BlackContainer
          data={{
            label: "PP_644FB1_WI",
            useClass: "greenTxt mt-2",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
           <BlackContainer
          data={{
            label: "PP_644FB1_TE",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        </div>
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
          <div>
   
    <TransparentBoxWithGate				
           isClickable={true}				
           parentClass="mx-auto mt-4"				
            squareProps={{				
            tagLabel: "PP_641DV5",				
            squareClass: `${useColorStatus("PP_641DV5")}`,				
          }}				
           />
                <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "641DV5",
          }}
        />
           </div>
           <div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "641DV6",
          }}
        />
    <TransparentBoxWithGate				
           isClickable={true}				
           parentClass="mx-auto mt-1"				
            squareProps={{				
            tagLabel: "PP_641DV6",				
            squareClass: `${useColorStatus("PP_641DV6")}`,				
          }}				
           />
           </div>
           </div>
           <div className="position-absolute single-text-36 d-flex">
          <div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "641DV1",
          }}
        />
    <TransparentBoxWithGate				
           isClickable={true}				
           parentClass="mx-auto mt-4"				
            squareProps={{				
            tagLabel: "PP_641DV1",				
            squareClass: `${useColorStatus("PP_641DV1")}`,				
          }}				
           />
             
           </div>
           </div>
           <BlackContainer
          data={{
            label: "PP_613CP1_PT",
            useClass: "greenTxt mt-2 position-absolute single-text-37",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
           <div className="yellowline-Vr position-absolute line-1"></div>
           <div className="yellowline-Vr position-absolute line-3"></div>
           <div className="yellowline-Vr position-absolute line-4"></div>
           <div className="yellowline-Vr position-absolute line-5"></div>
           <div className="yellowline-Vr position-absolute line-6"></div>
           <div className="yellowline-Vr position-absolute line-7"></div>
           <div className="yellowline-Vr downArrow position-absolute line-8"></div>
           <div className="yellowline-Vr downArrow position-absolute line-9"></div>
           <div className="yellowline-Vr downArrow position-absolute line-10"></div>
           <div className="yellowline-Hr position-absolute line-11"></div>
           <div className="yellowline-Hr position-absolute line-12"></div>
           <div className="yellowline-Vr downArrow position-absolute line-13"></div>
           <div className="yellowline-Hr position-absolute line-14"></div>
           <div className="yellowline-Vr downArrow position-absolute line-15"></div>
           <div className="yellowline-Hr position-absolute line-16"></div>
           <div className="yellowline-Vr downArrow position-absolute line-17"></div>
           <div className="yellowline-Hr position-absolute line-18"></div>
           <div className="yellowline-Vr downArrow position-absolute line-19"></div>
           <div className="yellowline-Hr position-absolute line-20"></div>
           <div className="yellowline-Vr downArrow position-absolute line-21"></div>
           <div className="yellowline-Hr position-absolute line-22"></div>
           <div className="yellowline-Vr downArrow position-absolute line-23"></div>
           <div className="yellowline-Hr position-absolute line-24"></div>
           <div className="yellowline-Vr downArrow position-absolute line-25"></div>








    </div>


  );
};

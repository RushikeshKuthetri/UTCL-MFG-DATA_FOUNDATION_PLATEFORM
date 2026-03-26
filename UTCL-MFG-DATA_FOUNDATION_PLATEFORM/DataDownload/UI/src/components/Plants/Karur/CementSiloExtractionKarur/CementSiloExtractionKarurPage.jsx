import {
  TextContainerWithWrapWord,
  BlackContainer,
  MimicCaret,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../index";
import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";


export const CementSiloExtractionKarurPage = () => {
  return (
    <div className="CementSiloExtractionKarurPage w-100 h-100 position-relative">
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
    <div className="yellowline-Vr upArrow position-absolute line-2"></div>
    <div className="yellowline-Vr  position-absolute line-3"></div>
    <div className="yellowline-Hr  position-absolute line-4"></div>
    <div className="yellowline-Vr downArrow position-absolute line-5"></div>
    <div className="yellowline-Vr downArrow position-absolute line-6"></div>
    <div className="yellowline-Vr downArrow position-absolute line-7"></div>
    <div className="yellowline-Vr downArrow position-absolute line-8"></div>
    <div className="yellowline-Vr  position-absolute line-9"></div>
    <div className="yellowline-Hr  position-absolute line-10"></div>
    <div className="yellowline-Vr downArrow position-absolute line-11"></div>
    <div className="yellowline-Vr downArrow position-absolute line-12"></div>
    <div className="yellowline-Vr downArrow position-absolute line-13"></div>
    <div className="yellowline-Vr downArrow position-absolute line-14"></div>
    <div className="yellowline-Vr  position-absolute line-15"></div>
    <div className="yellowline-Hr  position-absolute line-16"></div>
    <div className="yellowline-Vr  position-absolute line-17"></div>
    <div className="yellowline-Hr  position-absolute line-18"></div>
    <div className="yellowline-Hr  position-absolute line-19"></div>
    <div className="yellowline-Vr  position-absolute line-20"></div>
    <div className="yellowline-Vr  position-absolute line-21"></div>
    <div className="yellowline-Vr  position-absolute line-22"></div>
    <div className="yellowline-Hr leftarrow position-absolute line-23"></div>
    <div className="yellowline-Hr  position-absolute line-24"></div>
    <div className="yellowline-Hr  leftarrow position-absolute line-25"></div>
    <div className="yellowline-Vr  position-absolute line-26"></div>
    <div className="yellowline-Vr downArrow position-absolute line-27"></div>
    <div className="yellowline-Vr downArrow position-absolute line-28"></div>
    <div className="yellowline-Vr downArrow position-absolute line-29"></div>
    <div className="yellowline-Vr downArrow position-absolute line-30"></div>
    <div className="yellowline-Vr upArrow position-absolute line-31"></div>
    <div className="yellowline-Vr upArrow position-absolute line-32"></div>
    <div className="yellowline-Vr position-absolute line-33"></div>
    <div className="yellowline-Hr position-absolute line-34"></div>
    <div className="yellowline-Hr position-absolute line-35"></div>
    <div className="yellowline-Vr downArrow position-absolute line-36"></div>
    <div className="yellowline-Vr downArrow position-absolute line-37"></div>
    <div className="yellowline-Vr downArrow position-absolute line-38"></div>
    <div className="yellowline-Hr position-absolute line-40"></div>


     <div className="position-absolute single-text-1 d-flex">
        <div className="d-flex">
      
        <div className="d-flex">
        <div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  bg-info px-2 ",
            label: "BYP",
          }}
        />
           <BlackContainer
           data={{
             label: "PP_621BF2_DPT",
             useClass: "greenTxt  mt-1",
             unit: "mmWc",
             unitColor: "unitColor",
           }}
         />
         <BlackContainer
           data={{
             label: "PP_621BF2_PT1",
             useClass: "greenTxt  mt-1",
             unit: "bar",
             unitColor: "unitColor",
           }}
         />
            <div className="d-flex position-absolute mt-2 ml-1">
      <span>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BF2_DPT")}`}
          label="PP_621BF2_DPT"
        />
      </span>
      <span>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ml-2 ${useColorStatus("PP_621BF2_PT")}`}
          label="PP_621BF2_PT"
        />
      </span>
      </div>
      <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
      
        <div className="d-flex align-items-end justify-content-center ml-2 mt-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 ",
            label: "621BF2",
          }}
        />
        <span>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PP_621RA2"
          )}`}
          label="PP_621RA2_RUN"
        />
        </span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ",
            label: "621RA2",
          }}
        />
     
        </div>
        </div>
        <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
   
      </div>
       <div className="ml-5 mt-5 position-absolute">
<div>
<BlackContainer
           data={{
             label: "PP_621FN2_II",
             useClass: "greenTxt  mt-1 mx-auto",
             unit: "A",
             unitColor: "unitColor",
           }}
         />
           <BlackContainer
           data={{
             label: "PP_621FN2_SI",
             useClass: "greenTxt  mt-1 mx-auto",
             unit: "rpm",
             unitColor: "unitColor",
           }}
         />
<div className="img-97 d-flex justify-content-center  align-items-end">
  <span className={`dot grey-color   ${("51RF2_MR")}`}></span>
  <div className="line-39 yellowline-Vr position-relative upArrow"></div>
  </div>
<TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "621FN2",
          }}
        />
  </div>

     </div>

      </div>
      </div>


      </div>
      <div class="dashedHr-Pipe position-absolute single-text-2 mt-2"></div>
      <div className=" position-absolute  single-text-3 d-flex">
       <PipeWithCircles
         parentDivClass="pipe dotted-pipe"
         firstCircle={{
           firstCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621BE1_RUN", healthyLabel: "PP_621BE1_PH" }
          )} `,
          //  firstCircleText: "M",
         }}
       />
     </div>
     <div class="position-absolute single-text-4 d-flex">
        <div className="mr-2">
        <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621FN4_RUN", healthyLabel: "PP_621FN4_PH" }
          )}`}
          label="PP_621FN4_RUN"
        />
        </span>
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "621FN4(W)",
          }}
        />
        </div>
        <div>
        <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621FN5_RUN", healthyLabel: "PP_621FN5_PH" }
          )}`}
          label="PP_621FN5_RUN"
        />
        </span>
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "621FN5(S)",
          }}
        />
        </div>
        <div>
        <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621FN3_RUN", healthyLabel: "PP_621FN3_PH" }
          )}`}
          label="PP_621FN3_RUN"
        />
        </span>
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2 ",
            label: "621FN3(W)",
          }}
        />
        </div>
          </div>
          <div class="position-absolute single-text-5 d-flex">
            <div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 ",
            label: "621FS1",
          }}
        />
        <div className="d-flex">
             <div className="triangle">
        <div className="hpipecircle"><span className="greenSqure ml-5 51RF2_MR"></span></div>
        <div className="triangle-down"></div>
      </div>
      <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621VS1_RUN", healthyLabel: "PP_621VS1_PH" }
          )}`}
          
          label="PP_621VS1_RUN"
        />
        </div>
      
            </div>
          </div>

          <div className="position-absolute single-text-6">
            <div className="triangle-with-squares">
            <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ml-2",
            label: "621DB1",
          }}
        />
            </div>
          </div>
          <div class="dashedHr-Pipe position-absolute single-text-7 d-flex justify-content-center align-items-center">
            <div className="d-flex">
            <div>
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_621SG1_OLS", closeLabel: "PP_621SG1_CLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621SG1",
            }}
          />
            </div>
            <div className="ml-2 mt-3">
            <div>
          <div className="small-square dot-square-line d-flex flex-column align-items-center">
            <div className="square digital-tag  grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621GA1",
            }}
          />
            </div>
            </div>
          </div>
          <div class="dashedHr-Pipe position-absolute single-text-8"></div>
          <div className="position-absolute single-text-9 d-flex">
       
       <div className="containerImage text-center ml-2">
<span>
<MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BI1_LS")} ml-1`}
          label="PP_621BI1_LS"
        />
</span>
<TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "621BI-1",
}}
/>
  <BlackContainer
           data={{
             label: "PP_621BI1_WI",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "Tons",
             unitColor: "unitColor",
           }}
         />
       </div>
       <div>
       <span>
<MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BI1_PH")} ml-1`}
          label="PP_621BI1_PH"
        />
</span>
       </div>
       <div className="ml-5">
       <BlackContainer
           data={{
             label: "PP_621CG1_ZT",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
          <BlackContainer
           data={{
             label: "PP_621CG1",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
       </div>


     </div>
     <div className="position-absolute single-text-10 d-flex">
     <div className="mr-1 mt-3">
     <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "621LI2",
}}
/>
<TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "621LC2",
}}
/>
     </div>
       <div className="containerImage text-center ml-2">
       <span>
<MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BI2_LS")} ml-1`}
          label="PP_621BI2_LS"
        />
</span>
<TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "621BI-2",
}}
/>
  <BlackContainer
           data={{
             label: "PP_621BI2_WI",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "Tons",
             unitColor: "unitColor",
           }}
         />
       </div>
       <div>
       <span>
<MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BI2_PH")} ml-1`}
          label="PP_621BI2_PH"
        />
</span>
       </div>
       <div className="ml-5">
       <BlackContainer
           data={{
             label: "PP_621CG2_ZT",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
          <BlackContainer
           data={{
             label: "PP_621CG2",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
       </div>


     </div>
     <div className="dashedHr-Pipe position-absolute single-text-11 d-flex justify-content-center align-items-center">
            <div className="d-flex">
            <div>
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "", closeLabel: "" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621SG3",
            }}
          />
            </div>
            <div className="ml-3">
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_621CG1_EOLS", closeLabel: "PP_621CG1_ECLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621CG1",
            }}
          />
            </div>
            </div>
          </div>
          <div className="dashedHr-Pipe position-absolute single-text-12 d-flex justify-content-center align-items-center">
            <div className="d-flex">
            <div>
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "", closeLabel: "" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621SG4",
            }}
          />
            </div>
            <div className="ml-3">
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_621CG2_EOLS", closeLabel: "PP_621CG2_ECLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621CG2",
            }}
          />
            </div>
            </div>
          </div>


          <div className="containerImage position-absolute single-text-13">
            <div className="d-flex justify-content-around align-items-center">
              <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("RM_362GB2_LS")} ml-1`}
          
          label="RM_362GB2_LS"
        />
        </span>
            <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
            <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "", closeLabel: "" })}`}></div> 
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
            </div>
            <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BK1_SP1_RTSR")} ml-1`}
          
          label="PP_621BK1_SP1_RTSR"
        />
        </span>
            </div>
          </div>
          <div className="containerImage position-absolute single-text-14"></div>
          <div className="containerImage position-absolute single-text-15">
          <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BK1_SP1TOPZS")} ml-4`}
          
          label="PP_621BK1_SP1TOPZS"
        />
        </span>
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
            <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "", closeLabel: "" })}`}></div> 
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
            
          </div>
   
            </div>    
            </div>
          <div className="containerImage position-absolute single-text-16"></div>
          <div className="position-absolute single-text-17">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621BF2",
            }}
          />
          <div className="ml-3 mt-3">
              <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621PS1",
            }}
          />
              <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621BK1",
            }}
          />
              <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621BK1.LS",
            }}
          />
          </div>
          </div>
          <div className="position-absolute single-text-18">
          <div className="containerImage position-absolute single-text-13">
            <div className="d-flex justify-content-around align-items-center">
            <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BK2_SP2_RTSL")} ml-1`}
          
          label="PP_621BK2_SP2_RTSL"
        />
        </span>
            <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
            </div>
            <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BK2_SP2_RTSR")} ml-1`}
          
          label="PP_621BK2_SP2_RTSR"
        />
        </span>
            </div>
          </div>
          <div className="containerImage position-absolute single-text-14"></div>
          <div className="containerImage position-absolute single-text-15">
          <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BK2_SP2TOPZS")} ml-4`}
          
          label="PP_621BK2_SP2TOPZS"
        />
        </span>
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
            <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "", closeLabel: "" })}`}></div> 
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
            
          </div>
   
            </div>    
            </div>
          <div className="containerImage position-absolute single-text-16"></div>
          <div className="position-absolute single-text-17">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621BF2",
            }}
          />
          <div className="ml-3 mt-3">
              <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621PS2",
            }}
          />
              <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621BK2",
            }}
          />
              <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621BK2.LS",
            }}
          />
          </div>
          </div>
          </div>

          <div className="position-absolute single-text-19">
      <div>
      <div>

      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BE1_BMS")} ml-2`}
          text="BMS"
          label="PP_621BE1_BMS"
        /></div>
  <div className="d-flex mt-2">
  <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BE1_ZS")} ml-2`}
          text="ZS"
          label="PP_621BE1_ZS"
        /></div>
   <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ml-2 ${useColorStatus("PP_621BE1_TS")} ml-2`}
          text="TS"
          label="PP_621BE1_TS"
        /></div>

  </div>
        </div><div className="d-flex mt-2">
          <div>
          <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot mt-1 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621BE1_AD_RUN", healthyLabel: "PP_621BE1_AD_PH" }
          )}`}
          label="PP_621BE1_AD_RUN"
        /></div>
          {/* <div>
          <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot mt-1 ml-2 p-2 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621BE1_RUN", healthyLabel: "PP_621BE1_PH" }
          )}`}
          label="PP_621BE1_RUN"
        /></div> */}
          </div>
          <div className="d-flex mt-5">
          <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BE1_BSS3")} ml-2`}
          text="BSS3"
          label="PP_621BE1_BSS3"
        /></div>
            <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ml-4 ${useColorStatus("PP_621BE1_BSS4")} `}
          text="BSS4"
          label="PP_621BE1_BSS4"
        /></div>
            </div>
            <div className="d-flex">
            <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BE1_BSS3_ALM")} ml-2`}
          text="BSS3A"
          label="PP_621BE1_BSS3_ALM"
        /></div>
               <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ml-4 ${useColorStatus("PP_621BE1_BSS4_ALM")} `}
          text="BSS4A"
          label="PP_621BE1_BSS4_ALM"
        /></div>
              </div>
         
                 
                    </div>
                    <div className="position-absolute single-text-20">

                    <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK1_UP_CMND")}`}
          text="UPCMD"
          label="PP_621BK1_UP_CMND"
        /></div>
             <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK1_DWN_CMND")}`}
          text="DNCMD"
          label="PP_621BK1_DWN_CMND"
        /></div>
            <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK1_LEFT_FB")}`}
          text="LCMD"
          label="PP_621BK1_LEFT_FB"
        /></div>
            <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK1_RIGHT_FB")}`}
          text="RCMD"
          label="PP_621BK1_RIGHT_FB"
        /></div>
        <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK1_ES_FB")} ml-1`}
          label="PP_621BK1_ES_FB"
        />  
        </span> 


                    </div>
                    <div className="position-absolute single-text-21">

                    <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK2_UP_CMND")}`}
          text="UPCMD"
          label="PP_621BK2_UP_CMND"
        /></div>
             <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK2_DWN_CMND")}`}
          text="DNCMD"
          label="PP_621BK2_DWN_CMND"
        /></div>
            <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK2_LEFT_FB")}`}
          text="LCMD"
          label="PP_621BK2_LEFT_FB"
        /></div>
            <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK1_RIGHT_FB")}`}
          text="RCMD"
          label="PP_621BK1_RIGHT_FB"
        /></div>
        <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK2_ES_FB")} ml-1`}
          label="PP_621BK2_ES_FB"
        />  
        </span> 


        </div>
        <div className="position-absolute single-text-22 d-flex">
        <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK2_SP2_LS")} ml-1`}
          label="PP_621BK2_SP2_LS"
        />  
        </span>
        <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK2_SP2BOTZS")} ml-4`}
          label="PP_621BK2_SP2BOTZS"
        />  
        </span>
        </div>

        <div className="position-absolute single-text-23">
        <div class="truck"></div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "621WB2",
            }}
          />
        <BlackContainer
           data={{
             label: "PP_621WB2_WI",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "tons",
             unitColor: "unitColor",
           }}
         />
           
        </div>
        <div className="position-absolute single-text-24">
        <div class="truck"></div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "621WB1",
            }}
          />
        <BlackContainer
           data={{
             label: "PP_621WB1_WI",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "tons",
             unitColor: "unitColor",
           }}
         />
           
        </div>
        <div className="position-absolute single-text-25 d-flex">
        <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK1_SP1_LS")} ml-1`}
          label="PP_621BK1_SP1_LS"
        />  
        </span>
        <span>
            <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BK1_SP1BOTZS")} ml-4`}
          label="PP_621BK1_SP1BOTZS"
        />  
        </span>
        </div>
        <div class="position-absolute single-text-26">
        <BlackContainer
           data={{
             label: "PP_621BL1_PT",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "bar",
             unitColor: "unitColor",
           }}
         />
        <div className="mr-2 d-flex">
        <div className="mt-2">
 <MimicCaret
     parentClass="tringle-item"
     firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${(
      { openLabel: "CMH_K21BVJ_OLS", closeLabel: "CMH_K21BVJ_CLS" }
    )}`}
     secondCaretClass={`fa-solid fa-caret-up  d-block digital-tag  ${(
      { openLabel: "CMH_K21BVJ_OLS", closeLabel: "CMH_K21BVJ_CLS" }
    )}`}
    label="CMH_K21BVJ_OLS"
   />
   </div>
        <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621BL1_RUN", healthyLabel: "PP_621BL1_PH" }
          )}`}
          label="PP_621BL1_RUN"
        />
        </span>
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "621BL1(W)",
          }}
        />
        </div>
        <BlackContainer
           data={{
             label: "PP_621BL3_PT",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "bar",
             unitColor: "unitColor",
           }}
         />
        <div className="d-flex mt-3">
        <div className="mt-2">
 <MimicCaret
     parentClass="tringle-item"
     firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${(
      { openLabel: "CMH_K21BVJ_OLS", closeLabel: "CMH_K21BVJ_CLS" }
    )}`}
     secondCaretClass={`fa-solid fa-caret-up  d-block digital-tag  ${(
      { openLabel: "CMH_K21BVJ_OLS", closeLabel: "CMH_K21BVJ_CLS" }
    )}`}
    label="CMH_K21BVJ_OLS"
   />
   </div>
        <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621BL3_RUN", healthyLabel: "PP_621BL3_PH" }
          )}`}
          label="PP_621BL3_RUN"
        />
        </span>
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "621BL3(S)",
          }}
        />
        </div>
        <BlackContainer
           data={{
             label: "PP_621BL2_PT",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "bar",
             unitColor: "unitColor",
           }}
         />
        <div className="d-flex mt-3"> 
        <div>
 <MimicCaret
     parentClass="tringle-item"
     firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${(
      { openLabel: "CMH_K21BVJ_OLS", closeLabel: "CMH_K21BVJ_CLS" }
    )}`}
     secondCaretClass={`fa-solid fa-caret-up  d-block digital-tag  ${(
      { openLabel: "CMH_K21BVJ_OLS", closeLabel: "CMH_K21BVJ_CLS" }
    )}`}
    label="CMH_K21BVJ_OLS"
   />
   </div>
        <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621BL2_RUN", healthyLabel: "PP_621BL2_PH" }
          )}`}
          label="PP_621BL2_RUN"
        />
        </span>
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2 ",
            label: "621BL2(W)",
          }}
        />
        </div>
          </div>

          <div className="position-absolute single-text-27">
          <BlackContainer
           data={{
             label: "PP_621HR1_TE",
             useClass: "greenTxt  ml-auto mb-2 ",
             unit: "°C",
             unitColor: "unitColor",
           }}
         />
 <div>
 <MimicCaret
     parentClass="tringle-item d-flex"
     firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${(
      { openLabel: "PP_621BV5_OLS", closeLabel: "PP_621BV5_CLS" }
    )}`}
     secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${(
      { openLabel: "PP_621BV5_OLS", closeLabel: "PP_621BV5_CLS" }
    )}`}
    label="PP_621BV5_OLS"
   />
     <TextContainerWithWrapWord
     data={{
       useClass: "text-dark mt-2",
       label: "621BV5",
     }}
   />
   </div>
   <BlackContainer
           data={{
             label: "PP_621HR2_TE",
             useClass: "greenTxt  ml-auto mt-1 mb-2 ",
             unit: "°C",
             unitColor: "unitColor",
           }}
         />
 <div>
 <MimicCaret
     parentClass="tringle-item d-flex"
     firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${(
      { openLabel: "PP_621BV6_OLS", closeLabel: "PP_621BV6_CLS" }
    )}`}
     secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${(
      { openLabel: "PP_621BV6_OLS", closeLabel: "PP_621BV6_CLS" }
    )}`}
    label="PP_621BV6_OLS"
   />
     <TextContainerWithWrapWord
     data={{
       useClass: "text-dark mt-2",
       label: "621BV6",
     }}
   />
   </div>

   </div>
   <div className="position-absolute single-text-28">
<div>
        <span>
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot mt-2 ml-1 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621HR1_RUN", healthyLabel: "PP_621HR1_PH" }
          )}`}
         
          label="PP_621HR1_RUN"
        />
        </span>
        <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "621HR1",
}}
/>
</div>
<div>
<span>
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot mt-4 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621HR2_RUN", healthyLabel: "PP_621HR2_PH" }
          )}`}
         
          label="PP_621HR2_RUN"
        />
        </span>
        <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "621HR2",
}}
/>
</div>
        </div>
        
        <div className="position-absolute single-text-29">
  
 <div className="d-flex">
 <MimicCaret
     parentClass="tringle-item d-flex"
     firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${(
      { openLabel: "PP_621BV3_OLS", closeLabel: "PP_621BV3_CLS" }
    )}`}
     secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${(
      { openLabel: "PP_621BV3_OLS", closeLabel: "PP_621BV3_CLS" }
    )}`}
    label="PP_621BV3_OLS"
   />
     <TextContainerWithWrapWord
     data={{
       useClass: "text-dark ml-2",
       label: "621BV3",
     }}
   />
   </div>


   </div>
   <div className="position-absolute single-text-30">
  
  <div className="d-flex">
  <TextContainerWithWrapWord
      data={{
        useClass: "text-dark mr-2",
        label: "621BV2",
      }}
    />
  <MimicCaret
      parentClass="tringle-item d-flex"
      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${(
       { openLabel: "PP_621BV2_OLS", closeLabel: "PP_621BV2_CLS" }
     )}`}
      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${(
       { openLabel: "PP_621BV2_OLS", closeLabel: "PP_621BV2_CLS" }
     )}`}
     label="PP_621BV2_OLS"
    />
     
    </div>
    <div className="d-flex mt-5">
    <TextContainerWithWrapWord
      data={{
        useClass: "text-dark mr-2",
        label: "621BV1",
      }}
    />
  <MimicCaret
      parentClass="tringle-item d-flex"
      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${(
       { openLabel: "PP_621BV1_OLS", closeLabel: "PP_621BV1_CLS" }
     )}`}
      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${(
       { openLabel: "PP_621BV1_OLS", closeLabel: "PP_621BV1_CLS" }
     )}`}
     label="PP_621BV1_OLS"
    />
   
    </div>
 
 
    </div>

    <div className="position-absolute single-text-31">
  
  <div>
  <TextContainerWithWrapWord
      data={{
        useClass: "text-dark mb-2",
        label: "621BV4",
      }}
    />
  <MimicCaret
      parentClass="tringle-item d-flex"
      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${(
       { openLabel: "PP_621BV4_OLS", closeLabel: "PP_621BV4_CLS" }
     )}`}
      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${(
       { openLabel: "PP_621BV4_OLS", closeLabel: "PP_621BV4_CLS" }
     )}`}
     label="PP_621BV4_OLS"
    />
    
    </div>
 
 
    </div>
    <div className="position-absolute single-text-32 d-flex">
        <div className="d-flex">
      
        <div className="d-flex mr-5">
        <div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  bg-info px-2 ",
            label: "BYP",
          }}
        />
           <BlackContainer
           data={{
             label: "PP_621BF1_DPT",
             useClass: "greenTxt  mt-1",
             unit: "mmWc",
             unitColor: "unitColor",
           }}
         />
         <BlackContainer
           data={{
             label: "PP_621BF1_PT",
             useClass: "greenTxt  mt-1",
             unit: "bar",
             unitColor: "unitColor",
           }}
         />
             <div className="d-flex position-absolute mt-2 ml-1">
      <span>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BF1_DPT")}`}
         
          label="PP_621BF1_DPT"
        /></span>
       <span>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621BF1_PT")} ml-2`}
        
          label="PP_621BF1_PT"
        /></span>
      </div>
      <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
        <div className="d-flex align-items-end justify-content-center ml-2 mt-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 ",
            label: "621BF1",
          }}
        />
        <span>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PP_621RA1"
          )}`}
          label="PP_621RA1_RUN"
        />
        </span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ",
            label: "621RA1",
          }}
        />
     
        </div>
        </div>
        <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
   
      </div>
       <div className="ml-5 mt-5 position-absolute">
<div>

<div className="img-97 d-flex justify-content-center  align-items-end">
<MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621FN1_RUN", healthyLabel: "PP_621FN1_PH" }
          )}`}
          label="PP_621FN1_RUN"
        /></div>
<TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "621FN1",
          }}
        />
  </div>

     </div>

      </div>
      <div className="d-flex ml-5 mr-5">
        <div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  bg-info px-2 ",
            label: "BYP",
          }}
        />
           <BlackContainer
           data={{
             label: "PP_611BF6_DPT",
             useClass: "greenTxt  mt-1",
             unit: "mmWc",
             unitColor: "unitColor",
           }}
         />
         <BlackContainer
           data={{
             label: "PP_611BF6_PT",
             useClass: "greenTxt  mt-1",
             unit: "bar",
             unitColor: "unitColor",
           }}
         />
             <div className="d-flex position-absolute mt-2 ml-1">
             <span>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_611BF6_DPT")}`}
         
          label="PP_611BF6_DPT"
        /></span>
       <span>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_611BF6_PT")} ml-2`}
        
          label="PP_611BF6_PT"
        /></span>
      </div>
      <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
        <div className="d-flex align-items-end justify-content-center ml-2 mt-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-5 ",
            label: "621BF6",
          }}
        />
     
     
        </div>
        </div>
        <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
   
      </div>
       <div className="ml-5 mt-5 position-absolute">
<div>

<div className="img-97 d-flex justify-content-center  align-items-end">
<MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_611FN1N_RUN", healthyLabel: "PP_611FN1N_PH" }
          )}`}
          label="PP_611FN1N_RUN"
        /></div>
  <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-3 ",
            label: "611FN1N",
          }}
        />
  </div>

     </div>

      </div>
      <div className="d-flex ml-5">
        <div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  bg-info px-2 ",
            label: "BYP",
          }}
        />
           <BlackContainer
           data={{
             label: "PP_611BF4_DPT",
             useClass: "greenTxt  mt-1",
             unit: "mmWc",
             unitColor: "unitColor",
           }}
         />
         <BlackContainer
           data={{
             label: "PP_611BF4_PT",
             useClass: "greenTxt  mt-1",
             unit: "bar",
             unitColor: "unitColor",
           }}
         />
             <div className="d-flex position-absolute mt-2 ml-1">
             <span>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_611BF4_DPT")}`}
         
          label="PP_611BF4_DPT"
        /></span>
       <span>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_611BF4_PT")} ml-2`}
        
          label="PP_611BF4_PT"
        /></span>
      </div>
      <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
        <div className="d-flex align-items-end justify-content-center ml-2 mt-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-5",
            label: "611BF4",
          }}
        />

     
        </div>
        </div>
        <div className="yellowline-Vr  downArrow position-absolute line-39 ml-4"></div>
   
      </div>
       <div className="ml-5 mt-5 position-absolute">
<div>

<div className="img-97 d-flex justify-content-center  align-items-end">
<MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_611FN1M_RUN", healthyLabel: "PP_611FN1M_PH" }
          )}`}
          label="PP_611FN1M_RUN"
        /></div>
<TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-3 ",
            label: "611FN1M",
          }}
        />
  </div>

     </div>

      </div>

      </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
      <div>
      <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "611BI1",
}}
/>
  <div className="containerImage text-center ml-2 pt-2 mt-1">
  
        <BlackContainer
           data={{
             label: "PP_611BI1_WI",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "Tons",
             unitColor: "unitColor",
           }}
         />
       </div>
       <div className="dashedHr-Pipe position-absolute d-flex justify-content-center align-items-center">
            <div className="d-flex">
            <div>
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_611CGA_EOLS", closeLabel: "PP_611CGA_ECLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>

            </div>
            <div className="ml-3">
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_611SGA_OLS", closeLabel: "PP_611SGA_CLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
  
            </div>
            </div>
          </div>
          <BlackContainer
           data={{
             label: "PP_611CGA_ZT",
             useClass: "greenTxt  mt-4",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
           <BlackContainer
           data={{
             label: "PP_611CGA",
             useClass: "greenTxt  mt-1",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
           <div className="mt-1">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_611FN9_RUN", healthyLabel: "PP_611FN9_PH" }
          )}`}
          label="PP_611FN9_RUN"
        />
        </span>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ",
            label: "611FN9",
          }}
        />
        </div>
</div>
<div className="ml-5">
      <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "611BI2",
}}
/>
  <div className="containerImage text-center ml-2 pt-2 mt-1">
  
        <BlackContainer
           data={{
             label: "PP_611BI2_WI",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "Tons",
             unitColor: "unitColor",
           }}
         />
       </div>
       <div className="dashedHr-Pipe position-absolute d-flex justify-content-center align-items-center">
            <div className="d-flex">
            <div>
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_611CGL_EOLS", closeLabel: "PP_611CGL_ECLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>

            </div>
            <div className="ml-3">
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_611SGL_OLS", closeLabel: "PP_611SGL_CLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
  
            </div>
            </div>
          </div>
          <BlackContainer
           data={{
             label: "PP_611CGL_ZT",
             useClass: "greenTxt  mt-4",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
           <BlackContainer
           data={{
             label: "PP_611CGL",
             useClass: "greenTxt  mt-1",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
           <div className="mt-1">
            <span>
           <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_611FNF_RUN", healthyLabel: "PP_611FNF_PH" }
          )}`}
          label="PP_611FNF_RUN"
        />
        </span>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ",
            label: "611FNF",
          }}
        />
        </div>
</div>
<div className="ml-5">
      <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "611BI3",
}}
/>
  <div className="containerImage text-center ml-2 pt-2 mt-1">
  
        <BlackContainer
           data={{
             label: "PP_611BI3_WI",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "Tons",
             unitColor: "unitColor",
           }}
         />
       </div>
       <div className="dashedHr-Pipe position-absolute d-flex justify-content-center align-items-center">
            <div className="d-flex">
            <div>
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_611CGW_EOLS", closeLabel: "PP_611CGW_ECLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>

            </div>
            <div className="ml-3">
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_611SGW_OLS", closeLabel: "PP_611SGW_CLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
  
            </div>
            </div>
          </div>
          <BlackContainer
           data={{
             label: "PP_611CGW_ZT",
             useClass: "greenTxt  mt-4",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
           <BlackContainer
           data={{
             label: "PP_611CGW",
             useClass: "greenTxt  mt-1",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
           <div className="mt-1">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_611FNM_RUN", healthyLabel: "PP_611FNM_PH" }
          )}`}
          label="PP_611FNM_RUN"
        />
        </span>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ",
            label: "611FNM",
          }}
        />
        </div>
</div>
<div className="ml-5">
      <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "611BI4",
}}
/>
  <div className="containerImage text-center ml-2 pt-2 mt-1">
  
        <BlackContainer
           data={{
             label: "PP_611BI4_WI",
             useClass: "greenTxt  mt-2 mx-auto",
             unit: "Tons",
             unitColor: "unitColor",
           }}
         />
       </div>
       <div className="dashedHr-Pipe position-absolute d-flex justify-content-center align-items-center">
            <div className="d-flex">
            <div>
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_611CG1G_EOLS", closeLabel: "PP_611CG1G_ECLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>

            </div>
            <div className="ml-3">
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_611SG1L_OLS", closeLabel: "PP_611SG1L_CLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
  
            </div>
            </div>
          </div>
          <BlackContainer
           data={{
             label: "PP_611CG1G_ZT",
             useClass: "greenTxt  mt-4",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
           <BlackContainer
           data={{
             label: "PP_611CG1G",
             useClass: "greenTxt  mt-1",
             unit: "%",
             unitColor: "unitColor",
           }}
         />
           <div className="mt-1">
           <span>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_611FN1J_RUN", healthyLabel: "PP_611FN1J_PH" }
          )}`}
          label="PP_611FN1J_RUN"
        />
        </span>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ",
            label: "611FNJ",
          }}
        />
        </div>
</div>
     </div>
     <div class="dashedHr-Pipe position-absolute single-text-34 mt-2"></div>
     <div class="position-absolute single-text-35 d-flex">
        <div className="mr-2">
        <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_611FN1P_RUN", healthyLabel: "PP_611FN1P_PH" }
          )}`}
          label="PP_611FN1P_RUN"
        />
        </span>
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "611FN1P(W)",
          }}
        />
        </div>
        <div>
        <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_611FNX_RUN", healthyLabel: "PP_611FNX_PH" }
          )}`}
          label="PP_611FNX_RUN"
        />
        </span>
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "611FNX(S)",
          }}
        />
        </div>
        <div>
        <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_611FNW_RUN", healthyLabel: "PP_611FNW_PH" }
          )}`}
          label="PP_611FNW_RUN"
        />
        </span>
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2 ",
            label: "611FNW(W)",
          }}
        />
        </div>
          </div>
          <div className="position-absolute single-text-36">
                    <div>
                    <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ml-4 ${useColorStatus("PP_621BE1_LS1")}`}
          text="LS1"
          label="PP_621BE1_LS1"
        /></div>
                    <div className="d-flex">
                    <div>
                    <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BE1_ZSS")} mr-2`}
          text="ZSS"
          label="PP_621BE1_ZSS"
        /></div>
                    <div>
                    <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BE1_LS2")}`}
          text="LS2"
          label="PP_621BE1_LS2"
        /></div>
                  
                    </div>
                    </div>

                    <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 position-absolute single-text-37 ",
  label: "TO ATMOSPHERE",
}}
/>
<TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 position-absolute single-text-38 ",
  label: "TO ATMOSPHERE",
}}
/>
<TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 position-absolute single-text-39 ",
  label: "REJECT",
}}
/>
<div className=" position-absolute single-text-40">

            <div  className="d-flex">
            <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "621GA2",
            }}
          />
            <div>
          <div className="small-square dot-square-line d-flex flex-column align-items-center">
            <div className="square digital-tag  grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      
            </div>
            <div className="d-flex">
            <TextContainerWithWrapWord
            data={{
              useClass: "text-dark   mt-2 mr-3",
              label: "621SG2",
            }}
          />
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_621SG2_OLS", closeLabel: "PP_621SG2_CLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
     
            </div>
</div>
<div className=" position-absolute single-text-41">

            <div  className="d-flex">
         
            <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <div className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "PP_611SG1A_OLS", closeLabel: "PP_611SG1A_CLS" })}`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
         
        </div>
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-4",
              label: "611SG1A",
            }}
          />
      
            </div>
       
      
</div>
<div className=" position-absolute single-text-42 d-flex">
<div class="containerImage text-center ml-2 pt-2 mt-1"></div>
<span>
<MotorCircleDigitalTag
          className={`dot digital-tag motor-dot mt-2 ml-1 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_611SM1_RUN", healthyLabel: "PP_611SM1_PH" }
          )}`}
          text="M"
          label="PP_611SM1_RUN"
        />
</span>
</div>
<div className=" position-absolute single-text-43">
<div class="containerImage text-center ml-2 pt-2 mt-1"></div>
<TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611SM1",
            }}
          />
</div>

<div className="position-absolute single-text-44">
        <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
        <span>
        <MotorCircleDigitalTag
          className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_621FN6_RUN", healthyLabel: "PP_621FN6_PH" }
          )}`}
          label="PP_621FN6_RUN"
        />
        </span>
          </div>
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2 ",
            label: "621FN6",
          }}
        />
        </div>

        <div className="position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2 ",
            label: "621AS2",
          }}
        />
        </div>
        <div className="position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2 ",
            label: "621AS1",
          }}
        />
        </div>
        <div className="position-absolute single-text-47">
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "621BE1",
            }}
          />
        </div>


        <div className="position-absolute single-text-48">
              <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-5 ${useColorStatus("PP_621BE1_BSS1")} ml-2`}
          text="BSS1"
          label="PP_621BE1_BSS1"
        /></div>
  <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BE1_BSS1_ALM")} `}
          text="BSS1A"
          label="PP_621BE1_BSS1_ALM"
        /></div>

                </div>
                <div className="position-absolute single-text-49">
              
                <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BE1_BSS2")} ml-4`}
          text="BSS2"
          label="PP_621BE1_BSS2"
        /></div>
                   <div>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("PP_621BE1_BSS2_ALM")} ml-4`}
          text="BSS2A"
          label="PP_621BE1_BSS2_ALM"
        /></div>
                  </div>



  <div className="pipe-1 position-absolute d-flex">
    <div className="mr-2 mt-3">
    <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "621AR1-PS",
}}
/>
<TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "621AR1-DV",
}}
/>
    </div>
    <div>
  <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "621AR1",
}}
/>
      <div className="img-108 pt-2">
      <span>
      <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("PP_621AR1_PS")} ml-2`}
          label="PP_621AR1_PS"
        /></span>
      </div>
      <TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "AIR",
}}
/>
<TextContainerWithWrapWord
data={{
  useClass: "text-dark  mt-1 mx-auto",
  label: "RECEIVER",
}}
/>
</div>
      </div>




    </div>
  );
};

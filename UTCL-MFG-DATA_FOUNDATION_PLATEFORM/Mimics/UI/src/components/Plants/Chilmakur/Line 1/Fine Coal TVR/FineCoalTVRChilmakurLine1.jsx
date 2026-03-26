import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
  RedBoxWithGate,
} from "../../../../index";
import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useBVTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useImgColorStatusForNewPlantScreen,
  useGateTagsColorStatusForNewPlantScreens,
  useFanImgTagsColorStatus,
  useImgGateColorStatusForNewPlantScreen
} from "../../../../../utils";

export const FineCoalTVRChilmakurLine1 = () => {
   return (
      <div className="Chilamkur-L1-Fine-Coal-TVR  w-100 h-100 position-relative">
      <div className="position-absolute single-text-1  border p-2 text-center">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "COAL CALIBRATION",
        }}
      />
      <div className="text-center d-flex mt-1 ">
     <div className="mr-2 mt-3 text-left">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "STARTIG",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "END",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "RESULT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "TOTAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PER HOUR",
          }}
        />
      </div>
      <div className="mr-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "BIN LVL",
          }}
        />
        <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-1",
           unit: "",
           unitColor: "unitColor",
         }}
       />
       <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-1",
           unit: "",
           unitColor: "unitColor",
         }}
       />
       <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-1",
           unit: "",
           unitColor: "unitColor",
         }}
       />
       <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-1",
           unit: "",
           unitColor: "unitColor",
         }}
       />
       <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-1",
           unit: "",
           unitColor: "unitColor",
         }}
       />
      </div>
      <div className="mr-2">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ",
          label: "NEW PC COAL",
        }}
      />
      <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-1",
         unit: "",
         unitColor: "unitColor",
       }}
     />
     <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-1",
         unit: "",
         unitColor: "unitColor",
       }}
     />
     <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-1",
         unit: "",
         unitColor: "unitColor",
       }}
     />
     <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-1 ml-5",
         unit: "",
         unitColor: "unitColor",
       }}
     />
     <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-1",
         unit: "",
         unitColor: "unitColor",
       }}
     />
    </div>
    <div className="mr-2">
    <TextContainerWithWrapWord
      data={{
        useClass: "text-dark ",
        label: "PC COAL",
      }}
    />
    <BlackContainer
     data={{
       label: "RM1_361HD1_PT1",
       useClass: "greenTxt mb-1",
       unit: "",
       unitColor: "unitColor",
     }}
   />
   <BlackContainer
     data={{
       label: "RM1_361HD1_PT1",
       useClass: "greenTxt mb-1",
       unit: "",
       unitColor: "unitColor",
     }}
   />
   <BlackContainer
     data={{
       label: "RM1_361HD1_PT1",
       useClass: "greenTxt mb-4",
       unit: "",
       unitColor: "unitColor",
     }}
   />
   <BlackContainer
     data={{
       label: "RM1_361HD1_PT1",
       useClass: "greenTxt mb-1",
       unit: "",
       unitColor: "unitColor",
     }}
   />
  </div>
      </div>
      <div className="mt-1 d-flex align-items-center justify-content-center">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "COAL TIME",
        }}
      />
      <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt ml-2",
         unit: "Min",
         unitColor: "unitColor",
       }}
     />
      </div>
      <div className="mt-1 d-flex align-items-center justify-content-center">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "ERR_PERC",
        }}
      />
      <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt ml-2",
         unit: "",
         unitColor: "unitColor",
       }}
     />
     <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ml-2",
          label: "CORR_PERC",
        }}
      />
      <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt ml-2",
         unit: "",
         unitColor: "unitColor",
       }}
     />
      </div>
      </div>
      <div className="position-absolute single-text-2  border p-2 text-center">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "COAL CALIBRATION",
        }}
      />
      <div className="text-center d-flex mt-1 ">
     <div className="mr-2 mt-3 text-left">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-3",
            label: "STARTIG",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "RESULT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PER HOUR",
          }}
        />
      </div>
      <div className="mr-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "BIN LVL",
          }}
        />
        <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-1",
           unit: "",
           unitColor: "unitColor",
         }}
       />
       <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-1",
           unit: "",
           unitColor: "unitColor",
         }}
       />
       <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-1",
           unit: "",
           unitColor: "unitColor",
         }}
       />
       <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-1",
           unit: "",
           unitColor: "unitColor",
         }}
       />
      </div>
      <div className="mr-2">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ",
          label: "MB COAL",
        }}
      />
      <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-1",
         unit: "",
         unitColor: "unitColor",
       }}
     />
     <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-1",
         unit: "",
         unitColor: "unitColor",
       }}
     />
     <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-1",
         unit: "",
         unitColor: "unitColor",
       }}
     />
     <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-1",
         unit: "",
         unitColor: "unitColor",
       }}
     />
    </div>
      </div>
      <div className="mt-1 d-flex align-items-center justify-content-center">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "COAL TIME",
        }}
      />
      <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt ml-2",
         unit: "Min",
         unitColor: "unitColor",
       }}
     />
      </div>
      <div className="mt-1 d-flex align-items-center justify-content-center">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "ERR_PERC",
        }}
      />
      <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt ml-2",
         unit: "",
         unitColor: "unitColor",
       }}
     />
     <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ml-2",
          label: "CORR_PERC",
        }}
      />
      <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt ml-2",
         unit: "",
         unitColor: "unitColor",
       }}
     />
      </div>
      </div>
      <div className="position-absolute single-text-3  border p-2 text-center">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "LIQUID AFR SYSTEM",
        }}
      />
      <div className="text-center d-flex mt-1 align-items-center justify-content-center">
      <div className="text-center mr-3">
                    <MimicCaret
                      parentClass="d-flex tringle-item"
                      firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                        { openLabel: "PH_433BI1PBV5_OLS", closeLabel: "PH_433BI1PBV5_CLS" }
                      )}`}
                      secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                        { openLabel: "PH_433BI1PBV5_OLS", closeLabel: "PH_433BI1PBV5_CLS" }
                      )}`}
                      label="PH_433BI1PBV5_OLS"
                    />
   <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "OLD",
        }}
      />
      <TextContainerWithWrapWord
      data={{
        useClass: "text-dark",
        label: "PH",
      }}
    />
        </div>
        <div className="text-center">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_433BI1PBV5_OLS", closeLabel: "PH_433BI1PBV5_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "PH_433BI1PBV5_OLS", closeLabel: "PH_433BI1PBV5_CLS" }
          )}`}
          label="PH_433BI1PBV5_OLS"
        />
  <TextContainerWithWrapWord
  data={{
  useClass: "text-dark mt-1",
  label: "NEW",
  }}
  />
  <TextContainerWithWrapWord
  data={{
  useClass: "text-dark",
  label: "PH",
  }}
  />
  </div>
      </div>
      </div>
      <div className="position-absolute single-text-4  border p-2 text-center">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "COAL CATALYST",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "PANEL",
        }}
      />
      <div className="text-center d-flex mt-1 align-items-center justify-content-center">
      <div className="text-center mr-3">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "MB",
        }}
      />          
   <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "OLD PH",
        }}
      />
      <TextContainerWithWrapWord
      data={{
        useClass: "text-dark mt-1",
        label: "NEW PH",
      }}
    />
        </div>
        <div className="text-center">
        <MotorCircleDigitalTag
        className={`square mt-1 digital-tag ${useColorStatus("NA")}`}
        label="NA"
        />
        <MotorCircleDigitalTag
        className={`square mt-1 digital-tag ${useColorStatus("NA")}`}
        label="NA"
        />
        <MotorCircleDigitalTag
        className={`square mt-1 digital-tag ${useColorStatus("NA")}`}
        label="NA"
        />
  </div>
      </div>
      </div>
      <div className="position-absolute single-text-5 ">
      <TextContainerWithWrapWord
      data={{
        useClass: "text-dark",
        label: "Z1A205",
      }}
    />
      </div>
      <div  className="position-absolute single-text-6 d-flex">
      <div className="text-center">
      <div className="containerImage d-flex justify-content-center align-items-end">
      <MotorCircleDigitalTag
      className={`square digital-tag ${useColorStatus("NA")}`}
      label="NA"
      />
      </div>
      <MotorCircleDigitalTag
      className={`square mt-2 digital-tag ${useColorStatus("NA")}`}
      label="NA"
      />
      <div className="containerImage mt-2 pt-2">
      <MotorCircleDigitalTag
      className={`square digital-tag ${useColorStatus("NA")}`}
      label="NA"
      />
      <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mt-1",
           unit: "kg",
           unitColor: "unitColor",
         }}
       />
       <MotorCircleDigitalTag
       className={`square mt-1 digital-tag ${useColorStatus("NA")}`}
       label="NA"
       />
       <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "OLD PC",
        }}
      />
      </div>
    <div className="">
       <PipeWithCircles
      parentDivClass="hpipecircle"
      firstCircle={{
        firstCircleClass: "dot grey-color",
        firstCircleText: "M",
    
      }}
      text={{ useClass: "text-dark", label: "" }}
      secondCircle={{
        secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { runLabel: "NA", healthyLabel: "NA" }
        )}`,
        secondCircleLabel: "NA",
        secondCircleText: "",
      }}
    />
         <BlackContainer
           data={{
             label: "IIC202",
             useClass: "greenTxt mt-1 ",
             unit: "RPM",
             unitColor: "unitColor",
           }}
         />
       </div>
  
      </div>
      <div className="text-center">
      <div className="containerImage d-flex justify-content-center align-items-end">
      <MotorCircleDigitalTag
      className={`square digital-tag ${useColorStatus("NA")}`}
      label="NA"
      />
      </div>
      <MotorCircleDigitalTag
      className={`square mt-2 digital-tag ${useColorStatus("NA")}`}
      label="NA"
      />
      <div className="containerImage mt-2 pt-2">
      <MotorCircleDigitalTag
      className={`square digital-tag ${useColorStatus("NA")}`}
      label="NA"
      />
      <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mt-1",
           unit: "kg",
           unitColor: "unitColor",
         }}
       />
       <MotorCircleDigitalTag
       className={`square mt-1 digital-tag ${useColorStatus("NA")}`}
       label="NA"
       />
       <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "NEW PC",
        }}
      />
      </div>
    <div className="">
       <PipeWithCircles
      parentDivClass="hpipecircle"
      firstCircle={{
        firstCircleClass: "dot grey-color",
        firstCircleText: "M",
    
      }}
      text={{ useClass: "text-dark", label: "" }}
      secondCircle={{
        secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { runLabel: "NA", healthyLabel: "NA" }
        )}`,
        secondCircleLabel: "NA",
        secondCircleText: "",
      }}
    />
         <BlackContainer
           data={{
             label: "IIC202",
             useClass: "greenTxt mt-1 ",
             unit: "RPM",
             unitColor: "unitColor",
           }}
         />
       </div>
  
      </div>
      </div>
    <div className="position-absolute single-text-7 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K212BLM01")}`}
            label="K212BLM01"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K212BLM02")}`}
            label="K212BLM02"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K212BLM02")}`}
            label="K212BLM02"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K212BLM02")}`}
            label="K212BLM02"
            text="M"
          />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("K212BLM02")}`}
            label="K212BLM02"
            text="M"
          />
        </div>
  </div>
  <div  className="position-absolute single-text-8 d-flex">
  <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "Z1M184",
        }}
      />
      <TextContainerWithWrapWord
      data={{
        useClass: "text-dark",
        label: "Z2M735",
      }}
    />
    <TextContainerWithWrapWord
    data={{
      useClass: "text-dark",
      label: "Z2M734",
    }}
  />
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark",
    label: "Z1M193",
  }}
  />
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark",
    label: "Z1M182",
  }}
  />
  </div>
  <div  className="position-absolute single-text-9">
  <div className="box-1 bg-secondary ">
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mt-2 ml-3",
           unit: "C",
           unitColor: "unitColor",
         }}
       />
  <TextContainerWithWrapWord
        data={{
          useClass: "text-dark text-center ml-5 mt-2",
          label: "FINE COAL SILO",
        }}
      />
  </div>
  </div>
  <div  className="position-absolute single-text-10 d-flex">
  <div className="">
       <PipeWithCircles
      parentDivClass="hpipecircle"
      firstCircle={{
        firstCircleClass: "dot grey-color",
        firstCircleText: "M",
    
      }}
      text={{ useClass: "text-dark", label: "" }}
      secondCircle={{
        secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { runLabel: "NA", healthyLabel: "NA" }
        )}`,
        secondCircleLabel: "NA",
        secondCircleText: "",
      }}
    />
    <TextContainerWithWrapWord
    data={{
      useClass: "text-dark ml-2",
      label: "Z1M181",
    }}
  />
       </div>
       <div className="">
       <PipeWithCircles
      parentDivClass="hpipecircle"
      firstCircle={{
        firstCircleClass: "dot grey-color",
        firstCircleText: "M",
    
      }}
      text={{ useClass: "text-dark", label: "" }}
      secondCircle={{
        secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { runLabel: "NA", healthyLabel: "NA" }
        )}`,
        secondCircleLabel: "NA",
        secondCircleText: "",
      }}
    />
    <TextContainerWithWrapWord
    data={{
      useClass: "text-dark",
      label: "Z1M192",
    }}
  />
       </div>
       <div className="">
       <PipeWithCircles
      parentDivClass="hpipecircle"
      firstCircle={{
        firstCircleClass: "dot grey-color",
        firstCircleText: "M",
    
      }}
      text={{ useClass: "text-dark", label: "" }}
      secondCircle={{
        secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { runLabel: "NA", healthyLabel: "NA" }
        )}`,
        secondCircleLabel: "NA",
        secondCircleText: "",
      }}
    />
    <TextContainerWithWrapWord
    data={{
      useClass: "text-dark",
      label: "Z1M180",
    }}
  />
       </div>
  </div>
  <div  className="position-absolute single-text-11 d-flex">
  <div className="containerImage">
  </div>
  <div className="containerImage">
  </div>
  <div className="containerImage">
  </div>
  </div>
  <div  className="position-absolute single-text-12 d-flex">
  <div className="">
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark ml-auto",
    label: "Z1M189",
  }}
  />
       <PipeWithCircles
      parentDivClass="hpipecircle"
      firstCircle={{
        firstCircleClass: "dot grey-color",
        firstCircleText: "",
    
      }}
      text={{ useClass: "text-dark", label: "" }}
      secondCircle={{
        secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { runLabel: "NA", healthyLabel: "NA" }
        )}`,
        secondCircleLabel: "NA",
        secondCircleText: "M",
      }}
    />
       </div>
       <div className="">
       <TextContainerWithWrapWord
       data={{
         useClass: "text-dark",
         label: "Z1M188",
       }}
     />
       <PipeWithCircles
      parentDivClass="hpipecircle"
      firstCircle={{
        firstCircleClass: "dot grey-color",
        firstCircleText: "M",
    
      }}
      text={{ useClass: "text-dark", label: "" }}
      secondCircle={{
        secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { runLabel: "NA", healthyLabel: "NA" }
        )}`,
        secondCircleLabel: "NA",
        secondCircleText: "",
      }}
    />
       </div>
      
  </div>
  <div  className="position-absolute single-text-13 text-center">
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark",
    label: "MAIN BURNER",
  }}
  />
  <div className="box-1 mt-2"></div>
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark mt-4",
    label: "OLD PRE CALCINER",
  }}
  />
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark",
    label: "BURNER",
  }}
  />
  <div className="box-1 mt-2"></div>
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark mt-4",
    label: "NEW PRE CALCINER",
  }}
  />
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark",
    label: "BURNER",
  }}
  />
  <div className="box-1 mt-2"></div>
  </div>
  <div  className="position-absolute single-text-14 ">
       <PipeWithCircles
      parentDivClass="hpipecircle"
      firstCircle={{
        firstCircleClass: "dot grey-color",
        firstCircleText: "M",
    
      }}
      text={{ useClass: "text-dark", label: "" }}
      secondCircle={{
        secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { runLabel: "NA", healthyLabel: "NA" }
        )}`,
        secondCircleLabel: "NA",
        secondCircleText: "",
      }}
    />
    <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mt-1 ml-4",
           unit: "AMPS",
           unitColor: "unitColor",
         }}
       />
  </div>
  <div  className="position-absolute single-text-15 d-flex">
  <div className="d-flex">
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark mr-2",
    label: "Z1M177",
  }}
  />
  <MotorCircleDigitalTag
                     className={`dot digital-tag ${useColorStatus(
                       "PH_431BI1_LS"
                     )} `}
                     label="PH_431BI1_LS"
                     text="M"
                   />
  </div>
  <div className="d-flex">
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark mr-2",
    label: "Z1M190",
  }}
  />
  <MotorCircleDigitalTag
                     className={`dot digital-tag ${useColorStatus(
                       "PH_431BI1_LS"
                     )} `}
                     label="PH_431BI1_LS"
                     text="M"
                   />
  </div>
  <div className="d-flex">
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark mr-2",
    label: "Z1M176",
  }}
  />
  <MotorCircleDigitalTag
                     className={`dot digital-tag ${useColorStatus(
                       "PH_431BI1_LS"
                     )} `}
                     label="PH_431BI1_LS"
                     text="M"
                   />
  </div>
  </div>
  <div  className="position-absolute single-text-16 text-center">
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark",
    label: "741",
  }}
  />
  <div className=" squareplustri text-center pt-2">
  <MotorCircleDigitalTag
  className={`square mt-1 digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  </div>
  <div className="containerImage pt-1">
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark mt-1",
    label: "FINE COAL",
  }}
  />
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark",
    label: "BIN",
  }}
  />
  <BlackContainer
     data={{
       label: "RM1_361HD1_PT1",
       useClass: "greenTxt mt-1",
       unit: "MT",
       unitColor: "unitColor",
     }}
   />
  </div>
  <div className="mt-3 border py-3 px-2">
  <MotorCircleDigitalTag
  className={`square digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  <TextContainerWithWrapWord
  data={{
    useClass: "text-dark mt-1",
    label: "730",
  }}
  />
  </div>
  </div>
  <div  className="position-absolute single-text-17 d-flex">
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt",
           unit: "A",
           unitColor: "unitColor",
         }}
       />
       <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt ",
         unit: "MMWC",
         unitColor: "unitColor",
       }}
     />
  </div>
  <div  className="position-absolute single-text-18 d-flex">
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt",
           unit: "A",
           unitColor: "unitColor",
         }}
       />
       <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt ",
         unit: "MMWC",
         unitColor: "unitColor",
       }}
     />
  </div>
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt position-absolute single-text-19",
           unit: "A",
           unitColor: "unitColor",
         }}
       />
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt position-absolute single-text-20",
           unit: "",
           unitColor: "unitColor",
         }}
       />
  <div  className="position-absolute single-text-21">
  <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-4 ml-4",
         unit: "bar",
         unitColor: "unitColor",
       }}
     />
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt",
           unit: "A",
           unitColor: "unitColor",
         }}
       />
  </div>
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt position-absolute single-text-22",
           unit: "A",
           unitColor: "unitColor",
         }}
       />
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt position-absolute single-text-23",
           unit: "C",
           unitColor: "unitColor",
         }}
       />
  <div  className="position-absolute single-text-24 text-center">
  <MotorCircleDigitalTag
  className={`square digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  <TextContainerWithWrapWord
   data={{
     useClass: "text-dark mt-1",
     label: "AUTO FILL CMD",
   }}
  />
  </div>
  <div  className="position-absolute single-text-25 text-center">
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt ",
           unit: "sec",
           unitColor: "unitColor",
         }}
       />
       <TextContainerWithWrapWord
       data={{
         useClass: "text-dark mt-1",
         label: "AUTO FILL CMD ON TIME",
       }}
      />   
  <MotorCircleDigitalTag
  className={`square mt-5 digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  <TextContainerWithWrapWord
   data={{
     useClass: "text-dark mt-1",
     label: "AUTO FILL CMD",
   }}
  />
  </div>
  <div  className="position-absolute single-text-26 text-center">
  <div className="d-flex">
  <TextContainerWithWrapWord
   data={{
     useClass: "text-dark mr-2",
     label: "LEFT",
   }}
  />
  <MimicCaret
  parentClass="d-flex tringle-item"
  firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
    { openLabel: "PH_433BI1PBV5_OLS", closeLabel: "PH_433BI1PBV5_CLS" }
  )}`}
  secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
    { openLabel: "PH_433BI1PBV5_OLS", closeLabel: "PH_433BI1PBV5_CLS" }
  )}`}
  label="PH_433BI1PBV5_OLS"
  />
  </div>
  <div className="d-flex mt-1">
  <TextContainerWithWrapWord
   data={{
     useClass: "text-dark mr-2",
     label: "RIGHT",
   }}
  />
  <MimicCaret
  parentClass="d-flex tringle-item"
  firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
    { openLabel: "PH_433BI1PBV5_OLS", closeLabel: "PH_433BI1PBV5_CLS" }
  )}`}
  secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
    { openLabel: "PH_433BI1PBV5_OLS", closeLabel: "PH_433BI1PBV5_CLS" }
  )}`}
  label="PH_433BI1PBV5_OLS"
  />
  </div>
  </div>
  <div  className="position-absolute single-text-27 ">
  <MimicCaret
  parentClass="d-flex tringle-item"
  firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
    { openLabel: "PH_433BI1PBV5_OLS", closeLabel: "PH_433BI1PBV5_CLS" }
  )}`}
  secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
    { openLabel: "PH_433BI1PBV5_OLS", closeLabel: "PH_433BI1PBV5_CLS" }
  )}`}
  label="PH_433BI1PBV5_OLS"
  />
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mt-1 ",
           unit: "bar",
           unitColor: "unitColor",
         }}
       />
  </div>
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt position-absolute single-text-28",
           unit: "bar",
           unitColor: "unitColor",
         }}
       />
  <div  className="position-absolute single-text-29 text-center">
  <MotorCircleDigitalTag
                className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                  "CL_473RA1_RUN"
                )}`}
                label="CL_473RA1_RUN"
              />
  <div className="containerImage mt-3">
  </div>
  </div>
  <div  className="position-absolute single-text-30">
  <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-4 ml-4",
         unit: "MMWC",
         unitColor: "unitColor",
       }}
     />
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-4",
           unit: "MMWC",
           unitColor: "unitColor",
         }}
       />
       <MotorCircleDigitalTag
       className={`square ml-4 digital-tag ${useColorStatus("NA")}`}
       label="NA"
       />
  </div>
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt position-absolute single-text-31",
           unit: "A",
           unitColor: "unitColor",
         }}
       />
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt position-absolute single-text-32",
           unit: "MMWC",
           unitColor: "unitColor",
         }}
       />
  <div  className="position-absolute single-text-33 d-flex">
  <MotorCircleDigitalTag
  className={`square digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  <TextContainerWithWrapWord
   data={{
     useClass: "text-dark ml-2",
     label: "MB COAL FRG",
   }}
  />
  </div>
  <div  className="position-absolute single-text-34 d-flex">
  <MotorCircleDigitalTag
  className={`square digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  <TextContainerWithWrapWord
   data={{
     useClass: "text-dark ml-2",
     label: "OLD PC & NPC FIRING",
   }}
  />
  </div>
  <div  className="position-absolute single-text-35">
  <BlackContainer
       data={{
         label: "RM1_361HD1_PT1",
         useClass: "greenTxt mb-1",
         unit: "RPM",
         unitColor: "unitColor",
       }}
     />
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt",
           unit: "RPM",
           unitColor: "unitColor",
         }}
       />
  </div>
  <div  className="position-absolute single-text-36 d-flex">
  <MotorCircleDigitalTag
  className={`square digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  <MotorCircleDigitalTag
  className={`square digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  </div>
  <div  className="position-absolute single-text-37 d-flex">
  <MotorCircleDigitalTag
  className={`square digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  <MotorCircleDigitalTag
  className={`square digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  </div>
  <div  className="position-absolute single-text-38">
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt mb-4",
           unit: "",
           unitColor: "unitColor",
         }}
       />
  <MotorCircleDigitalTag
  className={`square digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  </div>
  <BlackContainer
         data={{
           label: "RM1_361HD1_PT1",
           useClass: "greenTxt position-absolute single-text-39",
           unit: "Amps",
           unitColor: "unitColor",
         }}
       />
  <div  className="position-absolute single-text-40">
  <MotorCircleDigitalTag
  className={`square digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  <MotorCircleDigitalTag
  className={`square mt-1 digital-tag ${useColorStatus("NA")}`}
  label="NA"
  />
  </div>
  
  
  <div className="pipe-1 pipeVr position-absolute"></div>
  <div className="pipe-2 pipeHr position-absolute"></div>
  <div className="pipe-3 pipeHr position-absolute"></div>
  <div className="pipe-4 pipeHr position-absolute"></div>
  <div className="pipe-5 pipeHr position-absolute"></div>
  <div className="pipe-6 pipeVr position-absolute"></div>
  <div className="pipe-7 pipeVr position-absolute"></div>
  
  
  <div class="yellowline-Vr downArrow position-absolute line-1"></div>
  <div class="yellowline-Vr downArrow position-absolute line-2"></div>
  <div class="yellowline-Vr downArrow position-absolute line-3"></div>
  <div class="yellowline-Vr downArrow position-absolute line-4"></div>
  <div class="yellowline-Vr downArrow position-absolute line-5"></div>
  <div class="yellowline-Vr upArrow position-absolute line-6"></div>
  <div class="yellowline-Vr downArrow position-absolute line-7"></div>
  <div class="yellowline-Hr position-absolute line-8"></div>
  <div class="yellowline-Vr upArrow position-absolute line-9"></div>
  <div class="yellowline-Hr position-absolute line-10"></div>
  <div class="yellowline-Hr position-absolute line-11"></div>
  <div class="yellowline-Vr upArrow position-absolute line-12"></div>
  <div class="yellowline-Vr upArrow position-absolute line-13"></div>
  <div class="yellowline-Vr upArrow position-absolute line-14"></div>
  <div class="yellowline-Vr upArrow position-absolute line-15"></div>
  <div class="yellowline-Vr upArrow position-absolute line-16"></div>
  <div class="yellowline-Vr upArrow position-absolute line-17"></div>
  <div class="yellowline-Vr position-absolute line-18"></div>
  <div class="yellowline-Vr position-absolute line-19"></div>
  <div class="yellowline-Hr leftarrow position-absolute line-20"></div>
  <div class="yellowline-Vr downArrow position-absolute line-21"></div>
  <div class="yellowline-Hr position-absolute line-22"></div>
  <div class="yellowline-Hr position-absolute line-23"></div>
  <div class="yellowline-Vr upArrow position-absolute line-24"></div>
  
   </div>
    );
};

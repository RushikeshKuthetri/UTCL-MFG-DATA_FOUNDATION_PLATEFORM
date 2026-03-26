import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";

import * as tagsData from "../../../../../data/Kotputli/BallMillArea/kotputliBMATextcolumn";
import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const BallmillAreakotputli = () => {
  return (
    <div className="BallmillArea-kotputli w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr upArrow position-absolute line-13"></div>
      <div className="yellowline-Vr upArrow position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr rightarrow d-flex align-items-center justify-content-around position-absolute line-26">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeVr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pr-4 position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-2 ml-5",
            label: "FROM 563AS2",
          }}
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <div className="pr-4 position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-2 ml-5",
            label: "FROM KK3AS4",
          }}
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <div className="pr-4 position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-2 ml-5",
            label: "573AS1",
          }}
        />
        <div className="pipeHr position-relative"></div>
      </div>
      <PipeWithCircles parentDivClass="pipe dotted-pipe position-absolute single-text-4" />

      <div className="d-flex justify-content-around align-items-end pb-4 squareplustri position-absolute single-text-5">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_563BF5_HP1_LS")}`}
          label="CM_563BF5_HP1_LS"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_563BF5_HP2_LS")}`}
          label="CM_563BF5_HP2_LS"
          text="L"
        />
      </div>
      <div className=" d-flex position-absolute single-text-6">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <div className={`square grey-color`}></div>
          <div className={`square ml-1 grey-color`}></div>
        </div>
        <div className="img-97 d-flex justify-content-center align-items-end">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "CM_573FN1"
            )} p-3`}
            label="CM_573FN1_RUN"
          />
          {/* <div className={`line-circle p-3 green-color`}> </div> */}
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark align-self-end",
            label: "573FN1",
          }}
        />
      </div>

      <div className="position-absolute single-text-7">
        <div className="hpipecircle position-relative"></div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="pipeVr p1 position-relative"></div>
          <div className="pipeHr position-relative"></div>
          <div className="pipeVr p2 position-relative"></div>
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <div className="hpipecircle position-relative"></div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="pipeVr p1 position-relative"></div>
          <div className="pipeHr position-relative"></div>
          <div className="pipeVr p2 position-relative"></div>
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <div className="hpipecircle position-relative"></div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="pipeVr p1 position-relative"></div>
          <div className="pipeHr position-relative"></div>
          <div className="pipeVr p2 position-relative"></div>
        </div>
      </div>
      <div className="chimni-red position-absolute single-text-10"></div>
      <div className="hpipecircle flex-column py-1 position-absolute single-text-11">
        <TextColumn useClass="d-flex" list={tagsData.kotputliBMATextcolumn3} />
        <BlackContainer
          data={{
            label: "CM_563BF5_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        {/* <div className="d-flex mt-1">
          <div className={`square grey-color`}></div>
          <div className={`square ml-3 grey-color`}></div>
        </div> */}
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "CM_563BF5_H01"
            )} p-2`}
            label="CM_563BF5_H01_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-5 ${useMotorTagsColorStatusForNewPlantScreens(
              "CM_563BF5_H02"
            )} p-2`}
            label="CM_563BF5_H02_RUN"
          />
          {/* <div className={`dot grey-color`}></div> */}
          {/* <div className={`dot ml-5 grey-color`}></div> */}
        </div>
        <TextColumn
          useClass="d-flex mt-1"
          list={tagsData.kotputliBMATextcolumn4}
        />
      </div>
      <div className="position-absolute single-text-12">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "CM_573FN3A"
            )} p-3`}
            label="CM_573FN3A_RUN"
          />
          {/* <div className={`line-circle p-3 green-color`}> </div> */}
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "573FN3A",
          }}
        />
      </div>
      <div className="position-absolute single-text-13">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "CM_573FN3"
            )} p-3`}
            label="CM_573FN3_RUN"
          />
          {/* <div className={`line-circle p-3 green-color`}> </div> */}
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "573FN3",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "CM_573FN2"
            )} p-3`}
            label="CM_573FN2_RUN"
          />
          {/* <div className={`line-circle p-3 green-color`}> </div> */}
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "573FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "CM_573FN2A"
            )} p-3`}
            label="CM_573FN2A_RUN"
          />
          {/* <div className={`line-circle p-3 green-color`}> </div> */}
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "573FN2A",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-16">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CM_573SG1_OLS", closeLabel: "CM_573SG1_CLS" }
            )}`}
            label="CM_573SG1_OLS"
          />
          {/* <div className={`dot green-color`}></div> */}
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "573SG1",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-17">
        <div className="dot-square-line d-flex flex-column align-items-center">
          {/* <div className={`dot green-color`}></div>*/}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CM_573SG2_OLS", closeLabel: "CM_573SG2_CLS" }
            )}`}
            label="CM_573SG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "573SG2",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <div className="dot-square-line d-flex flex-column align-items-center ml-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CM_573SG3_OLS", closeLabel: "CM_573SG3_CLS" }
            )}`}
            label="CM_573SG3_OLS"
          />
          {/* <div className={`dot green-color`}></div> */}
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="squareplustri position-absolute single-text-19"> </div>
      <div className="d-flex position-absolute single-text-20">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div className={`dot p-3 green-color`}> </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-3",
            label: "563FN5",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-21">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CM_573RA2"
          )}`}
          label="CM_573RA2_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-22">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CM_573RA3"
          )}`}
          label="CM_573RA3_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-23">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CM_573RA1"
          )}`}
          label="CM_573RA1_RUN"
        />
      </div>
      <div className="border p-2 d-flex align-items-center position-absolute single-text-24">
        <div className="hpipecircle pv1 position-relative"></div>
        <div className="hpipecircle pv2 position-relative"></div>
        <div className="hpipecircle flex-column justify-content-around pv3 position-relative">
          <TextColumn
            useClass="d-flex justify-content-between w-100"
            list={tagsData.kotputliBMATextcolumn9}
          />
          <div className="w-100 d-flex justify-content-around">
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-5",
                label: "563BM1",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_563BM1_BTE6",
                useClass: "greenTxt ml-5",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="w-100 d-flex justify-content-around mt-2">
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
            <div className={`dot grey-color`}> </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-5",
                label: "563GM1",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_563BM1_BTE7",
                useClass: "greenTxt ml-5",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextColumn
            useClass="d-flex justify-content-between w-100"
            list={tagsData.kotputliBMATextcolumn10}
          />
        </div>
        <div className="hpipecircle pv4 position-relative"></div>
        <div className="hpipecircle pv5 position-relative"></div>
        <div className="hpipecircle pv6 position-relative"></div>
        <div className="hpipecircle pv7 position-relative"></div>
        <div className="hpipecircle pv8 position-relative"></div>
        <div className="hpipecircle pv9 position-relative"></div>
      </div>
      <TextColumn
        useClass="position-absolute single-text-25"
        list={tagsData.kotputliBMATextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-26"
        list={tagsData.kotputliBMATextcolumn2}
      />
      <TextColumn
        useClass="position-absolute single-text-27"
        list={tagsData.kotputliBMATextcolumn5}
      />
      <TextColumn
        useClass="position-absolute single-text-28"
        list={tagsData.kotputliBMATextcolumn6}
      />
      <TextColumn
        useClass="position-absolute single-text-29"
        list={tagsData.kotputliBMATextcolumn7}
        text="563SK2"
        textClass="text-dark"
      />
      <TextColumn
        useClass="position-absolute single-text-30"
        list={tagsData.kotputliBMATextcolumn8}
      />
      <BlackContainer
        data={{
          label: "CM_573BE1_BSS_A01",
          useClass: "greenTxt position-absolute single-text-31",
          unit: "mm",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CM_573BE1_BSS_A02",
          useClass: "greenTxt position-absolute single-text-32",
          unit: "mm",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "ZSS",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_573BE1_M01_I",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-34">
        <div className={`dot p-3 green-color`}></div>
        <div className={`dot p-3 ml-4 green-color`}></div>
      </div>
      <div className="img-85 position-absolute single-text-37"></div>
      <div className="position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "563BF5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border mt-1 p-1",
            label: "SV FIRING",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "573BF1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border mt-1 p-1",
            label: "BYPASS",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <MotorCircleDigitalTag
          className={`text-dark p-1 digital-tag ${useColorStatus(
            "CM_573BE1_TS"
          )}`}
          label="CM_573BE1_TS"
          text="TS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "573BE1_M02",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <MotorCircleDigitalTag
          className={`text-dark p-1 digital-tag ${useColorStatus(
            "CM_573BE1_ZS"
          )}`}
          label="CM_573BE1_ZS"
          text="ZS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "573BE1_M01",
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "573GA2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-5",
            label: "573RA2",
          }}
        />
      </div>
      <div className="position-absolute single-text-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "573GA3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-5 ml-5",
            label: "573RA3",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-45",
          label: "DRY FLASH FROM K33DG1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-46",
          label: "To SKS INLET",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-47",
          label: "573BE1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-48",
          label: "573RA1",
        }}
      />
      <div className="position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "LS2",
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-3 digital-tag ${useColorStatus(
            "CM_573BE1_LS1"
          )}`}
          label="CM_573BE1_LS1"
          text="LS1"
        />
      </div>
      <div className="position-absolute single-text-50">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_573GA1_CLS")}`}
          label="CM_573GA1_CLS"
        />
        <MotorCircleDigitalTag
          className={`square mt-5 digital-tag ${useColorStatus(
            "CM_573GA1_OLS"
          )}`}
          label="CM_573GA1_OLS"
        />
      </div>
      <div className="position-absolute single-text-51">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_573GA2_CLS")}`}
          label="CM_573GA2_CLS"
        />
        <MotorCircleDigitalTag
          className={`square mt-5 digital-tag ${useColorStatus(
            "CM_573GA2_OLS"
          )}`}
          label="CM_573GA2_OLS"
        />
      </div>
      {/* 96,97 */}
      <TextColumn
        useClass="d-flex flex-column justify-content-between position-absolute position-absolute single-text-52"
        list={tagsData.kotputliBMATextcolumn11}
      />

      {/* 92 */}
      <BlackContainer
        data={{
          label: "CM_563BM1_PT1",
          useClass: "greenTxt position-absolute position-absolute single-text-53",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />

      {/* 93,90,91 */}
      <TextColumn
        useClass="d-flex flex-column justify-content-between position-absolute position-absolute single-text-54"
        list={tagsData.kotputliBMATextcolumn12}
      />
    </div>
  );
};

import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  TopLeftBox,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";

import * as tagsData from "../../../../../data/maihar/line-4/RABHandDustTransport/maiharL4RABHandDustTransportTextcolumn";
import {
  useCaretColorStatus,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useImgGateColorStatusForNewPlantScreen,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const RABHandDustTransportMaiharL4 = () => {
  return (
    <div className="RABHandDustTransport-kotputli RABHDustTransport-Maihar w-100 h-100 position-relative">
      <div className="yellowline-Vr upArrow d-flex flex-column align-items-center justify-content-around position-absolute line-1">
        <i className="fa-solid fa-caret-up"></i>
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr upArrow d-flex flex-column align-items-center justify-content-around position-absolute line-2">
        <i className="fa-solid fa-caret-up"></i>
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr upArrow position-absolute line-3"></div>
      <div className="yellowline-Vr upArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Vr position-absolute line-35"></div>
      <div className="yellowline-Vr position-absolute line-36"></div>
      <div className="yellowline-Vr position-absolute line-37"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-38"></div>
      <div className="yellowline-Hr rightarrow d-flex align-items-center justify-content-around position-absolute line-39">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr rightarrow position-absolute line-40"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-41"></div>
      <div className="yellowline-Hr position-absolute line-42"></div>
      <div className="yellowline-Hr position-absolute line-43"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Hr position-absolute line-47"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-48"></div>
      <div className="triangle-with-squares d-flex align-items-center justify-content-around position-absolute single-text-11">
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP1_LS")}`}
            text="L"
            label="PH_424BF1_HP1_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HR2_PH", runLabel: "PH_424HR2_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HR2_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP2_LS")}`}
            text="L"
            label="PH_424BF1_HP2_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HR3_PH", runLabel: "PH_424HR3_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HR3_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP3_LS")}`}
            text="L"
            label="PH_424BF1_HP3_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HR4_PH", runLabel: "PH_424HR4_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HR4_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP4_LS")}`}
            text="L"
            label="PH_424BF1_HP4_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HR5_PH", runLabel: "PH_424HR5_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HR5_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP5_LS")}`}
            text="L"
            label="PH_424BF1_HP5_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HR6_PH", runLabel: "PH_424HR6_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HR6_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP6_LS")}`}
            text="L"
            label="PH_424BF1_HP6_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HR7_PH", runLabel: "PH_424HR7_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HR7_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP7_LS")}`}
            text="L"
            label="PH_424BF1_HP7_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HR8_PH", runLabel: "PH_424HR8_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HR8_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP8_LS")}`}
            text="L"
            label="PH_424BF1_HP8_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HR9_PH", runLabel: "PH_424HR9_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HR9_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP9_LS")}`}
            text="L"
            label="PH_424BF1_HP9_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HRA_PH", runLabel: "PH_424HRA_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HRA_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP10_LS")}`}
            text="L"
            label="PH_424BF1_HP10_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HRB_PH", runLabel: "PH_424HRB_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HRB_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP11_LS")}`}
            text="L"
            label="PH_424BF1_HP11_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HRC_PH", runLabel: "PH_424HRC_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HRC_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_424BF1_HP12_LS")}`}
            text="L"
            label="PH_424BF1_HP12_LS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424HRD_PH", runLabel: "PH_424HRD_RUN" }
            )} mt-1`}
            text="H"
            label="PH_424HRD_RUN"
          />
        </div>
      </div>
      <div className="pt-2 pipeVr rounded position-absolute single-text-1">
        <div className="d-flex justify-content-between">
          <TextColumn list={tagsData.maiharL4RABHandDustTransportTextcolumn2} />
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light mt-1",
                label: "424BF1 BAGHOUSE PURGING",
              }}
            />
            <div className="squareplustri mx-auto mt-2 d-flex align-items-center justify-content-around">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "PH_424BF1_RUN"
                )}`}
                label="PH_424BF1_RUN"
              />
            </div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "PH_424BF1_DPT",
                useClass: "greenTxt  mx-auto",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex mt-2">
              <div>
                <BlackContainer
                  data={{
                    label: "PH_424BF1_PT3",
                    useClass: "greenTxt",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark w-75 mt-2",
                    label: "FIRING SEQUENCE",
                  }}
                />
              </div>
              <TextColumn
                list={tagsData.maiharL4RABHandDustTransportTextcolumn3}
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark w-75",
                label: "Hopper Level Switch Not Healthy",
              }}
            />
            <BlackContainer
              data={{
                label: "BH_HOP_Trip_Time",
                useClass: "greenTxt mt-2",
                unit: "s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <TextColumn list={tagsData.maiharL4RABHandDustTransportTextcolumn4} />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID1_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID1_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID2_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID2_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID3_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID3_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID4_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID4_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID5_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID5_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID6_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID6_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID7_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID7_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID8_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID8_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID9_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID9_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID10_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID10_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID11_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID11_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID12_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID12_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID13_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID13_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID14_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID14_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID15_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID15_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID16_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID16_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID17_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID17_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID18_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID18_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID19_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID19_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID20_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID20_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID21_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID21_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID22_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID22_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID23_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID23_CLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID24_CLS"
            )}`}
            text="C"
            label="PH_424BF1_ID24_CLS"
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID1_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID1_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID2_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID2_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID3_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID3_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID4_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID4_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID5_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID5_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID6_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID6_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID7_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID7_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID8_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID8_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID9_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID9_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID10_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID10_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID11_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID11_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID12_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID12_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID13_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID13_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID14_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID14_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID15_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID15_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID16_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID16_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID17_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID17_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID18_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID18_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID19_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID19_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID20_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID20_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID21_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID21_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID22_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID22_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID23_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID23_OLS"
          />

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF1_ID24_OLS"
            )}`}
            text="O"
            label="PH_424BF1_ID24_OLS"
          />
        </div>
        <TextColumn
          useClass="d-flex justify-content-between mt-1"
          list={tagsData.maiharL4RABHandDustTransportTextcolumn5}
        />
        <TextColumn
          useClass="d-flex justify-content-between mt-01"
          list={tagsData.maiharL4RABHandDustTransportTextcolumn6}
        />
      </div>
      <div className="position-absolute single-text-2">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "424CV1" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424CV1_PH", runLabel: "PH_424CV1_RUN" }
            )}`,
            secondCircleLabel: "PH_424CV1_RUN",
          }}
        />
      </div>
      <div className="position-absolute single-text-3">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "424CV2" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424CV2_PH", runLabel: "PH_424CV2_RUN" }
            )}`,
            secondCircleLabel: "PH_424CV2_RUN",
          }}
        />
      </div>
      <div className="position-absolute single-text-4">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "424CV3" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424CV3_PH", runLabel: "PH_424CV3_RUN" }
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "PH_424CV3_RUN",
          }}
        />
      </div>
      <div className="position-absolute single-text-5">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424CV4_PH", runLabel: "PH_424CV4_RUN" }
            )}`,
            firstCircleText: "M",
            firstCircleLabel: "PH_424CV4_RUN",
          }}
          text={{ useClass: "text-dark", label: "424CV4" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
          }}
        />
      </div>
      <div className="position-absolute single-text-6">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "442CV1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_444CV1_PH", runLabel: "PH_444CV1_RUN" }
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "PH_444CV1_RUN",
          }}
        />
      </div>
      <div className="position-absolute single-text-7">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "424CV5" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424CV5_PH", runLabel: "PH_424CV5_RUN" }
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "PH_424CV5_RUN",
          }}
        />
      </div>
      <div className="position-absolute single-text-8">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "424CV6" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424CV6_PH", runLabel: "PH_424CV6_RUN" }
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "PH_424CV6_RUN",
          }}
        />
      </div>
      <div className="chimni-red position-absolute single-text-9"></div>
      <div className="position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "424BE1",
          }}
        />
        <PipeWithCircles parentDivClass="pipe dotted-pipe mt-2" />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAD",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RAD"
          )}`}
          label="PH_424RAD_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA1",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RA1"
          )}`}
          label="PH_424RA1_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA2",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RA2"
          )}`}
          label="PH_424RA2_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA3",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RA3"
          )}`}
          label="PH_424RA3_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA4",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RA4"
          )}`}
          label="PH_424RA4_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA5",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RA5"
          )}`}
          label="PH_424RA5_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-18">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA6",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RA6"
          )}`}
          label="PH_424RA6_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA7",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RA7"
          )}`}
          label="PH_424RA7_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA8",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RA8"
          )}`}
          label="PH_424RA8_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA9",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RA9"
          )}`}
          label="PH_424RA9_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAA",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RAA"
          )}`}
          label="PH_424RAA_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAB",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RAB"
          )}`}
          label="PH_424RAB_RUN"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAC",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RAC"
          )}`}
          label="PH_424RAC_RUN"
        />
      </div>
      <div className="squareplustri position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "Dust trapper",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-26">
        <MotorCircleDigitalTag
          className={`dot ml-2 mt-1 digital-tag ${useColorStatus(
            "PH_424BI1_LS"
          )}`}
          label="PH_424BI1_LS"
          text="L"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mx-auto",
            label: "424BI1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424BI1_WT",
            useClass: "greenTxt mt-1 mx-auto",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-27">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_424BF2_Purging"
            )}`}
            label="PH_424BF2_Purging"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424FN2_PH", runLabel: "PH_424FN2_RUN" }
            )}`}
            label="PH_424FN2_RUN"
          />
        </div>
      </div>
      <div className=" d-flex position-absolute single-text-28">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_424RAE_RUN", healthyLabel: "PH_424RAE_PH" }
          )} p-3`}
          label="PH_424RAE_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "424RAE",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-29">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_424FN3_RUN", healthyLabel: "PH_424FN3_PH" }
          )} p-3`}
          label="PH_424FN3_RUN"
        />
      </div>
      <div className="position-absolute single-text-31">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "PH_424LD2A_EX_OLS",
                closeLabel: "PH_424LD2A_EX_CLS",
              }
            )}`}
            label="PH_424LD2A_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className=" d-flex position-absolute single-text-32">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_424LD2_EX_OLS", closeLabel: "PH_424LD2_EX_CLS" }
            )}`}
            label="PH_424LD2_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
          <BlackContainer
            data={{
              label: "PH_424LD2_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "424LD2",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-33">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "PH_424SD2_EX_OLS",
                closeLabel: "PH_424SD2_EX_CLS",
                healthyLabel: "PH_424SD2_PH",
              }
            )}`}
            label="PH_424SD2_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "424SD2",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "BH_DP2_Time",
            useClass: "greenTxt",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "BH_DP1_Time",
            useClass: "greenTxt mt-1",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "BH_DP_Time",
            useClass: "greenTxt mt-1",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424FN1_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424FN1_JI",
            useClass: "greenTxt mt-2 mb-4",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_424FN1_RTS", runLabel: "PH_424FN1_RUN" }
          )} p-3`}
          label="PH_424FN1_RUN"
          text="M"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "424FN1",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "424SG2",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_424SG2_OLS", closeLabel: "PH_424SG2_CLS" }
            )}`}
            label="PH_424SG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "424SG1",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_424SG1_OLS", closeLabel: "PH_424SG1_CLS" }
            )}`}
            label="PH_424SG1_OLS"
          />

          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-37">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-4",
              label: "424DG1",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <div className={`dot grey-color`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`gray-green-red-img position-absolute single-text-38 ${useImgGateColorStatusForNewPlantScreen(
          {
            openLabel: "PH_424DG1_1_OLS",
            closeLabel: "PH_424DG1_1_CLS",
            healthyLabel: "PH_424DG1_1_PH",
          }
        )}`}
        label="PH_424DG1_1_OLS"
      />
      <div className="position-absolute single-text-40">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "PH_424SG3_OLS",
                closeLabel: "PH_424SG3_CLS",
                healthyLabel: "PH_424SG3_PH",
              }
            )}`}
            label="PH_424SG3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "424SG3",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "PH_424SD1_EX_OLS",
                closeLabel: "PH_424SD1_EX_CLS",
                healthyLabel: "PH_424SD1_PH",
              }
            )}`}
            label="PH_424SD1_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "424SD1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424FN1_PID",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "424SG4",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_424SG4_OLS", closeLabel: "PH_424SG4_CLS" }
            )}`}
            label="PH_424SG4_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("PH_424BE1_TS1")}`}
          text="TS1"
          label="PH_424BE1_TS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag mt-2 ${useColorStatus(
            "PH_424BE1_ZS1"
          )}`}
          text="ZS1"
          label="PH_424BE1_ZS1"
        />
      </div>

      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-44 ${useColorStatus(
          "PH_424BE1_BMS"
        )}`}
        text="BMS"
        label="PH_424BE1_BMS"
      />
      <div className="position-absolute single-text-45">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_424BE1_RUN", healthyLabel: "PH_424BE1_PH" }
          )}`}
          label="PH_424BE1_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-3${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_424BE1_M02_RUN", healthyLabel: "PH_424BE1_M02_PH" }
          )}`}
          label="PH_424BE1_M02_RUN"
          text="M"
        />
      </div>

      <MotorCircleDigitalTag
        className={`text-dark position-absolute single-text-46 digital-tag ${useColorStatus(
          "PH_424BE1_LS1"
        )}`}
        text="LS1"
        label="PH_424BE1_LS1"
      />

      <MotorCircleDigitalTag
        className={`text-dark position-absolute single-text-47 digital-tag mt-4 ${useColorStatus(
          "PH_424BE1_ZSS1"
        )}`}
        text="ZSS"
        label="PH_424BE1_ZSS1"
      />

      <div className="position-absolute single-text-48">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "PH_424DG1_EX_CLS"
          )}`}
          text="CL"
          label="PH_424DG1_EX_CLS"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag mt-3 ${useColorStatus(
            "PH_424DG1_EX_OLS"
          )}`}
          text="OP"
          label="PH_424DG1_EX_OLS"
        />
      </div>
      <div className="d-flex position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "424RAF",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_424RAF"
          )}`}
          label="PH_424RAF_RUN"
        />
      </div>
      <div className="position-absolute single-text-50">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({healthyLabel:"PH_424BL1A_PH",runLabel:"PH_424BL1A_RUN"})} p-3`}
          label="PH_424BL1A_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "424BL1A",
          }}
        />
      </div>
      <div className="position-absolute single-text-51">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({healthyLabel:"PH_424BL1B_PH",runLabel:"PH_424BL1B_RUN"})} p-3`}
          label="PH_424BL1B_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "424BL1B",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "424PV1.V001",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item mt-3"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "PH_424BV1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "PH_424BV1"
          )}`}
          label="PH_424BV1"
        />
      </div>
      <TextColumn
        useClass="d-flex position-absolute single-text-53"
        list={tagsData.maiharL4RABHandDustTransportTextcolumn7}
      />
      <TextColumn
        useClass="d-flex position-absolute single-text-54"
        list={tagsData.maiharL4RABHandDustTransportTextcolumn8}
      />
      <TopLeftBox
        parentDivClass="CGRnBox p-3 position-absolute single-text-55"
        useClass="d-flex mt-1"
        list={tagsData.maiharL4RABHandDustTransportTextcolumn9}
      />
      <BlackContainer
        data={{
          label: "PH_424BE1_II",
          useClass: "greenTxt position-absolute single-text-56",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PH_424LD2_PID",
          useClass: "greenTxt position-absolute single-text-58",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "424LD2A",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424LD2A_ZT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-60">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "424FN2",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424BF2_PT1",
            useClass: "greenTxt mt-4",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-61">
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`square digital-tag mr-5 ${useColorStatus(
              "PH_424GA1_CLS"
            )}`}
            text="C"
            label="PH_424GA1_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA2_CLS")}`}
            text="C"
            label="PH_424GA2_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA3_CLS")}`}
            text="C"
            label="PH_424GA3_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA4_CLS")}`}
            text="C"
            label="PH_424GA4_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA5_CLS")}`}
            text="C"
            label="PH_424GA5_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA6_CLS")}`}
            text="C"
            label="PH_424GA6_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA7_CLS")}`}
            text="C"
            label="PH_424GA7_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA8_CLS")}`}
            text="C"
            label="PH_424GA8_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA9_CLS")}`}
            text="C"
            label="PH_424GA9_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GAA_CLS")}`}
            text="C"
            label="PH_424GAA_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GAB_CLS")}`}
            text="C"
            label="PH_424GAB_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GAC_CLS")}`}
            text="C"
            label="PH_424GAC_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GAD_CLS")}`}
            text="C"
            label="PH_424GAD_CLS"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <MotorCircleDigitalTag
            className={`square mr-5 digital-tag ${useColorStatus(
              "PH_424GA1_OLS"
            )}`}
            text="O"
            label="PH_424GA1_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA2_OLS")}`}
            text="O"
            label="PH_424GA2_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA3_OLS")}`}
            text="O"
            label="PH_424GA3_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA4_OLS")}`}
            text="O"
            label="PH_424GA4_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA5_OLS")}`}
            text="O"
            label="PH_424GA5_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA6_OLS")}`}
            text="O"
            label="PH_424GA6_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA7_OLS")}`}
            text="O"
            label="PH_424GA7_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA8_OLS")}`}
            text="O"
            label="PH_424GA8_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GA9_OLS")}`}
            text="O"
            label="PH_424GA9_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GAA_OLS")}`}
            text="O"
            label="PH_424GAA_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GAB_OLS")}`}
            text="O"
            label="PH_424GAB_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GAC_OLS")}`}
            text="O"
            label="PH_424GAC_OLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("PH_424GAD_OLS")}`}
            text="O"
            label="PH_424GAD_OLS"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "PH_424SD2_ZT",
          useClass: "greenTxt position-absolute single-text-63",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-64">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "424BF2",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_424BF2_DPT",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-65",
          label: "FROM RAW MILL",
        }}
      />
      <div className="position-absolute single-text-66">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FOR DILUTION FRESH AIR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "FOR DILUTION FRESH AIR",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-67",
          label: "TO 394AS4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-68",
          label: "TO 394AS4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-69",
          label: "FROM PH FAN (MIX CHAMBER)",
        }}
      />
      <BlackContainer
        data={{
          label: "PH_424BF1_TT1",
          useClass: "greenTxt position-absolute single-text-70",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-72",
          label: "DILUTION AIR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-3 position-absolute single-text-73",
          label: "WHRS",
        }}
      />
      <div className="position-absolute single-text-74">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO HOT DUST BIN ",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "424BI1",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-75",
          label: "AERATION AIR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-76",
          label: "TO KILN FEED BIN AIR SLIDE 414ASC",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-77",
          label: "FROM 424-SG3 SLIDE GATE BELOW STACK",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-78",
          label: "HOT DUST BIN",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-79"
        list={tagsData.maiharL4RABHandDustTransportTextcolumn10}
      />
      <TextColumn
        useClass="position-absolute single-text-80"
        list={tagsData.maiharL4RABHandDustTransportTextcolumn1}
      />
      <div className="position-absolute single-text-81">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BH FAN RESET TIMER",
          }}
        />
        <BlackContainer
          data={{
            label: "BH_FAN_RST_TIME",
            useClass: "greenTxt mt-01",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-82">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA TRIP TIMER",
          }}
        />
        <BlackContainer
          data={{
            label: "RA_Trip_Time",
            useClass: "greenTxt mt-01",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "BH RAL>=2 NOS NOT RUNNING",
          }}
        />
        <BlackContainer
          data={{
            label: "RA_Trip2_Time",
            useClass: "greenTxt mt-01",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-83">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_364LD4_EOLS",
                closeLabel: "RM_364LD4_ECLS",
                healthyLabel: "RM_364LD4_PH",
              }
            )}`}
            label="RM_364LD4_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "364LD4",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "RM_364LD4_ZT",
          useClass: "greenTxt position-absolute single-text-84",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <MotorCircleDigitalTag
        className={`dot p-3  digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { healthyLabel: "PH_424HR1_PH", runLabel: "PH_424HR1_RUN" }
        )} position-absolute single-text-85`}
        label="PH_424HR1_RUN"
      />
    </div>
  );
};

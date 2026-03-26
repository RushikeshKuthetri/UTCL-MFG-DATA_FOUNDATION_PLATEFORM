import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../index";
import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useImgColorStatusForNewPlantScreen,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const ClinkerTransportAndStorage = () => {
  return (
    <div className="ClinkerTransportAndStorage w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        text={{ useClass: "text-dark mx-auto", label: "491BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_491BC2_RUN", healthyLabel: "CMH_491BC2_PH" }
          )}`,
          secondCircleLabel: "CMH_491BC2_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        text={{ useClass: "text-dark mx-auto", label: "491BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_491BC1_RUN", healthyLabel: "CMH_491BC1_PH" }
          )}`,
          secondCircleLabel: "CMH_491BC1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        text={{ useClass: "text-dark mx-auto", label: "511BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_511BC1_RUN", healthyLabel: "CMH_511BC1_PH" }
          )}`,
          secondCircleLabel: "CMH_511BC1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        text={{ useClass: "text-dark mx-auto", label: "511BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_511BC2_RUN", healthyLabel: "CMH_511BC2_PH" }
          )}`,
          secondCircleLabel: "CMH_511BC2_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        text={{ useClass: "text-dark mx-auto", label: "511BC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_511BC3_RUN", healthyLabel: "CMH_511BC3_PH" }
          )}`,
          secondCircleLabel: "CMH_511BC3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        text={{ useClass: "text-dark mx-auto", label: "K21BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_K21BC1_RUN", healthyLabel: "CMH_K21BC1_PH" }
          )}`,
          secondCircleLabel: "CMH_K21BC1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        text={{ useClass: "text-dark mx-auto", label: "K21BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_K21BC2_RUN", healthyLabel: "CMH_K21BC2_PH" }
          )}`,
          secondCircleLabel: "CMH_K21BC2_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_K21BC4_RUN", healthyLabel: "CMH_K21BC4_PH" }
          )}`,
          firstCircleLabel: "CMH_K21BC4_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark mx-auto", label: "K21BC4" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_K21BC5_RUN", healthyLabel: "CMH_K21BC5_PH" }
          )}`,
          firstCircleLabel: "CMH_K21BC5_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark mx-auto", label: "K21BC5" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        text={{ useClass: "text-dark mx-auto", label: "511BC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_511BC4_RUN", healthyLabel: "CMH_511BC4_PH" }
          )}`,
          secondCircleLabel: "CMH_511BC4_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        text={{ useClass: "text-dark mx-auto", label: "K21BC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_K21BC3_RUN", healthyLabel: "CMH_K21BC3_PH" }
          )}`,
          secondCircleLabel: "CMH_K21BC3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        text={{ useClass: "text-dark mx-auto", label: "K21MA1" }}
      />
      <div className="pipe dotted-pipe position-absolute pipe-13"></div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute pipe-14" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute pipe-15" />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-16"
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_K21RU1_RUN", healthyLabel: "CMH_K21RU1_PH" }
          )}`,
          secondCircleText: "",
        }}
      />
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr position-absolute pipe-33"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-44"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-45"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-46"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-47"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-48"></div>
      <div className="yellowline-Hr position-absolute pipe-49"></div>
      <div className="yellowline-Vr  position-absolute pipe-50"></div>
      <div className="yellowline-Hr position-absolute pipe-51"></div>
      <div className="yellowline-Vr  position-absolute pipe-52"></div>
      <div className="yellowline-Vr  position-absolute pipe-53"></div>
      <div className="yellowline-Vr  position-absolute pipe-54"></div>
      <div className="yellowline-Vr  position-absolute pipe-55"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-56"></div>
      <div className="yellowline-Vr position-absolute pipe-57"></div>
      <div className="yellowline-Vr position-absolute pipe-58"></div>
      <div className="yellowline-Vr position-absolute pipe-59"></div>
      <div className="yellowline-Vr position-absolute pipe-60"></div>
      <div className="yellowline-Vr position-absolute pipe-61"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-62"></div>
      <div className="yellowline-Hr position-absolute pipe-63"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-64"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-65"></div>
      <div className="yellowline-Vr position-absolute pipe-66"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-67"></div>
      <div className="yellowline-Hr position-absolute pipe-68"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-69"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-70"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-71"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-72"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-73"></div>

      <div className="containerImage position-absolute single-text-1 ">
        <div className="d-flex justify-content-around mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "491LI1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "VENT SOCKET",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "SILO FEED SOCKET",
            }}
          />
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "BAG FILTER DISCHARGE",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "FEED SOCKET",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MAIN HOLE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "491LS1",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-2">
        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("CMH_491BF1")}`}
              label="CMH_491BF1"
            />
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <div className="yellowline-Vr upArrow position-absolute"></div>
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CMH_491FN1_RUN", healthyLabel: "CMH_491FN1_PH" }
                )}`}
                label="CMH_491FN1_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "491FN1",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("CMH_491BF2")}`}
              label="CMH_491BF2"
            />
            {/* <div className={`square ml-1 grey-color`}></div> */}
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <div className="yellowline-Vr upArrow position-absolute"></div>
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CMH_491FN2_RUN", healthyLabel: "CMH_491FN2_PH" }
                )}`}
                label="CMH_491FN2_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "491FN2",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("CMH_491BF3")}`}
              label="CMH_491BF3"
            />
            {/* <div className={`square ml-1 grey-color`}></div> */}
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CMH_491FN3_RUN", healthyLabel: "CMH_491FN3_PH" }
                )}`}
                label="CMH_491FN3_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "491FN3",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("CMH_491BF4")}`}
              label="CMH_491BF4"
            />
            {/* <div className={`square ml-1 grey-color`}></div> */}
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <div className="yellowline-Vr upArrow position-absolute"></div>
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CMH_491FN4_RUN", healthyLabel: "CMH_491FN4_PH" }
                )}`}
                label="CMH_491FN4_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "491FN4",
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-3">
        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("CMH_511BF1")}`}
              label="CMH_511BF1"
            />
            {/* <div className={`square ml-1 grey-color`}></div> */}
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CMH_511FN1_RUN", healthyLabel: "CMH_511FN1_PH" }
                )}`}
                label="CMH_511FN1_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "511FN1",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("CMH_511BF2")}`}
              label="CMH_511BF2"
            />
            {/* <div className={`square ml-1 grey-color`}></div> */}
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CMH_511FN2_RUN", healthyLabel: "CMH_511FN2_PH" }
                )}`}
                label="CMH_511FN2_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "511FN2",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("CMH_511BF3")}`}
              label="CMH_511BF3"
            />
            {/* <div className={`square ml-1 grey-color`}></div> */}
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CMH_511FN3_RUN", healthyLabel: "CMH_511FN3_PH" }
                )}`}
                label="CMH_511FN3_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "511FN3",
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-4">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CMH_K21BF2")}`}
            label="CMH_K21BF2"
          />
          {/* <div className={`square ml-1 grey-color`}></div> */}
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FN2_RUN", healthyLabel: "CMH_K21FN2_PH" }
              )}`}
              label="CMH_K21FN2_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "K21FN2",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-5">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CMH_K21BF3B")}`}
            label="CMH_K21BF3B"
          />
          {/* <div className={`square ml-1 grey-color`}></div> */}
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FN3B_RUN", healthyLabel: "CMH_K21FN3B_PH" }
              )}`}
              label="CMH_K21FN3B_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "K21FN3B",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-6">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CMH_K21BF1")}`}
            label="CMH_K21BF1"
          />
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CMH_K21FN1_RUN", healthyLabel: "CMH_K21FN1_PH" }
              )}`}
              label="CMH_K21FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "K21FN1",
            }}
          />
        </div>
      </div>
      <div className="roller-jcb position-absolute single-text-7"></div>
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-8 ${useImgColorStatusForNewPlantScreen(
          { closeLabel: "CMH_K21DG1_CLS", openLabel: "CMH_K21DG1_OLS" }
        )}`}
        label="CMH_K21DG1_OLS"
      />
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-9 ${useImgColorStatusForNewPlantScreen(
          { closeLabel: "CMH_K21DG2_CLS", openLabel: "CMH_K21DG2_OLS" }
        )}`}
        label="CMH_K21DG2_OLS"
      />
      <div className="position-absolute single-text-10 d-flex justify-content-center align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_491RU1_RUN", healthyLabel: "CMH_491RU1_PH" }
          )}`}
          label="CMH_491RU1_RUN"
        />
      </div>
      <div className="position-absolute single-text-11 d-flex justify-content-center align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_491RU2_RUN", healthyLabel: "CMH_491RU2_PH" }
          )}`}
          label="CMH_491RU2_RUN"
        />
      </div>
      <div className="position-absolute single-text-12 d-flex justify-content-center align-items-center">
        {/* <div className={`dot ${useSKCWColorStatus("581SR1_MR")}`}></div> */}
      </div>
      <div className="position-absolute single-text-13 text-center">
        <div className="img-85"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "K21RU1-CH-PUR",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex align-items-center text-center">
        <div>
          <BlackContainer
            data={{
              label: "CMH_491SI1_LT1",
              useClass: "greenTxt",
              unit: "Mtr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491SI1_LT2",
              useClass: "greenTxt mt-1",
              unit: "Mtr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491SI1_LT3",
              useClass: "greenTxt mt-1",
              unit: "Mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "CLINKER SILO",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "491SI1",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CMH_491SI1_LS1")}`}
            label="CMH_491SI1_LS1"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CMH_491SI1_LS2"
            )} mt-1`}
            label="CMH_491SI1_LS2"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CMH_491SI1_LS3"
            )} mt-1`}
            label="CMH_491SI1_LS3"
            text="L"
          />
        </div>
      </div>
      <div className="position-absolute single-text-15 d-flex ">
        <div className="bg-secondary p-1">1</div>
        <div className="bg-secondary p-1">2</div>
        <div className="bg-secondary p-1">3</div>
        <div className="bg-secondary p-1">4</div>
        <div className="bg-secondary p-1">5</div>
        <div className="bg-secondary p-1">6</div>
        <div className="bg-secondary p-1">7</div>
        <div className="bg-secondary p-1">8</div>
        <div className="bg-secondary p-1">9</div>
        <div className="bg-secondary p-1">A</div>
        <div className="bg-secondary p-1">B</div>
        <div className="bg-secondary p-1">C</div>
        <div className="bg-secondary p-1">D</div>
        <div className="bg-secondary p-1">E</div>
        <div className="bg-secondary p-1">F</div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_422SD1_OLS", closeLabel: "PH_422SD1_CLS" }
            )}`}
            label="PH_422SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_491BF1_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-primary",
              label: "BYP SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-1",
              label: "491BF1",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_491BF2_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-primary",
              label: "BYP SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-1",
              label: "491BF2",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_491BF3_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-primary",
              label: "BYP SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-1",
              label: "491BF3",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_491BF4_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-primary",
              label: "BYP SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-1",
              label: "491BF4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_511BF1_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-primary",
              label: "BYP SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-1",
              label: "511BF1",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_511BF2_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-primary",
              label: "BYP SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-1",
              label: "511BF2",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_511BF3_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-primary",
              label: "BYP SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-1",
              label: "511BF3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_K21BF2_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-primary",
              label: "BYP SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-1",
              label: "K21BF2",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMH_K21BF3B_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 bg-primary",
              label: "BYP SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-1",
              label: "K21BF3B",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "CMH_K21BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 bg-primary",
            label: "BYP SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mt-1",
            label: "K21BF3B",
          }}
        />
      </div>
      <div className="text-center d-flex position-absolute single-text-21 align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "CMH_491BF1_PT",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491FN1_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491FN1_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491FN1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CMH_491BF2_PT",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491FN2_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491FN2_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491FN2",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CMH_491BF3_PT",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CMH_491BF4_PT",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491FN4_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491FN4_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491FN4",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "CMH_511BF1_PT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_511BF2_PT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_511BF3_PT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "CMH_K21BF2_PT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CMH_K21BF3B_PT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO 491BC1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO 491BC1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO 491BC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO 491SI1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO 511BC4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO 511BC4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO 511BC4",
          }}
        />
      </div>
      <div className="roller-drum position-absolute d-flex justify-content-center align-items-center single-text-26">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_K21RU2_RUN", healthyLabel: "CMH_K21RU2_PH" }
          )}`}
          label="CMH_K21RU2_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-27">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO K21BC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO K21BC5",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "K31HP1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "CLK_HPR_SEL",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K21BC3A",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "ADD_HPR_SEL",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K21DG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K21DG2",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_491RA1"
          )}`}
          label="CMH_491RA1_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_491RA2"
          )}`}
          label="CMH_491RA2_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_491RA3"
          )}`}
          label="CMH_491RA3_RUN"
        />
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_511RA1"
          )}`}
          label="CMH_511RA1_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_511RA2"
          )}`}
          label="CMH_511RA2_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_511RA3"
          )}`}
          label="CMH_511RA3_RUN"
        />
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_K21RA2"
          )}`}
          label="CMH_K21RA2"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_K21RA3B"
          )}`}
          label="CMH_K21RA3B_RUN"
        />
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_491RA5"
          )}`}
          label="CMH_491RA5_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_491RA4"
          )}`}
          label="CMH_491RA4_RUN"
        />
      </div>
      <div className="position-absolute single-text-36 d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CMH_K21RA1"
          )}`}
          label="CMH_K21RA1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO K21BC1",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BULK RECEIVING UNIT",
          }}
        />
      </div>
      <div className="position-absolute single-text-38 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "CMH_491RU1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491RU1_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491RU1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CMH_491RU2_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491RU2_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_491RU2",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-39 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CMH_K21RU1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CHM_K21RU1_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "K21 RU1 SEL",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "CMH_K21RU1",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K21RU1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-40 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "CMH_K21BF1_PT",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CMH_K21FN1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K21FN1_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K21FN1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CMH_491BE1_M02_RUN",
              healthyLabel: "CMH_491BE1_M02_PH",
            }
          )}`}
          label="CMH_491BE1_M02_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_491BE1_RUN", healthyLabel: "CMH_491BE1_PH" }
          )}`}
          label="CMH_491BE1_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-42 d-flex flex-column align-items-center">
        <div className="text-center align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CMH_491TT1_RUN", healthyLabel: "CMH_491TT1_PH" }
            )}`}
            label="CMH_491TT1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-primary mt-1",
              label: "491RU2 SEL",
            }}
          />
        </div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CMH_491TT2_RUN", healthyLabel: "CMH_491TT2_PH" }
          )} align-items-center`}
          label="CMH_491TT2_RUN"
        />
      </div>
      <div className="position-absolute single-text-43">
        <div>
          <BlackContainer
            data={{
              label: "CMH_K21RU2_SI",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K21RU2_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K21RU2",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CMH_K21RU2",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex">
        <div className="d-flex ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-primary",
              label: "491RU1 SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "491BE1_MO2",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CMH_491BE1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-45 d-flex align-items-center">
        <div className="text-center">
          <div className="img-88"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "GYP SUM CAP 5000T",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "GYP_YARD_SEL",
          }}
        />
      </div>
      <div className="position-absolute single-text-46 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CMH_491RU1_MG")}`}
          label="CMH_491RU1_MG"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CMH_491RU1_PCS_L")}`}
          label="CMH_491RU1_PCS_L"
        />
      </div>
      <div className="position-absolute single-text-47 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CMH_491RU1_PCS_R")}`}
          label="CMH_491RU1_PCS_R"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CMH_491RU1_LS")}`}
          label="CMH_491RU1_LS"
          text="L"
        />
      </div>
      <div className="position-absolute single-text-48 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CMH_491RU2_MG")}`}
          label="CMH_491RU2_MG"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CMH_491RU2_PCS_L")}`}
          label="CMH_491RU2_PCS_L"
        />
      </div>
      <div className="position-absolute single-text-49 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CMH_491RU2_PCS_R")}`}
          label="CMH_491RU2_PCS_R"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CMH_491RU2_LS")}`}
          label="CMH_491RU2_LS"
          text="L"
        />
      </div>
      <div className="position-absolute single-text-50 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CMH_K21RU1_PCS_L")}`}
          label="CMH_K21RU1_PCS_L"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CMH_K21RU1_PCS_R")}`}
          label="CMH_K21RU1_PCS_R"
        />
      </div>
      <div className="position-absolute single-text-51 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CMH_K21RU1_MG")}`}
          label="CMH_K21RU1_MG"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CMH_K21RU1_LS")}`}
          label="CMH_K21RU1_LS"
          text="L"
        />
      </div>
      <div className="position-absolute single-text-52 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_491BC1_NDE_MG"
            )}`}
            label="CMH_491BC1_NDE_MG"
            text="NMG"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_491BC1_BSSL"
            )} mt-1`}
            label="CMH_491BC1_BSSL"
            text="BSSL"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_491BC1_PCSL"
            )} mt-1`}
            label="CMH_491BC1_PCSL"
            text="PCSL"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_491BC1_VGTU"
            )}`}
            label="CMH_491BC1_VGTU"
            text="VGTU"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_491BC1_BSSR"
            )}`}
            label="CMH_491BC1_BSSR"
            text="BSSR"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_491BC1_PCSR"
            )} mt-1`}
            label="CMH_491BC1_PCSR"
            text="PCSR"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_491BC1_DE_MG"
            )}`}
            label="CMH_491BC1_DE_MG"
            text="DMG"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_491BE1_LS1"
            )} mt-3`}
            label="CMH_491BE1_LS1"
            text="LS1"
          />
        </div>
      </div>
      <div className="position-absolute single-text-53 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC5_VGTU"
            )}`}
            label="CMH_K21BC5_VGTU"
            text="VGTU"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC5_BSSL"
            )}`}
            label="CMH_K21BC5_BSSL"
            text="BSSL"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC5_PCSL"
            )} mt-1`}
            label="CMH_K21BC5_PCSL"
            text="PCSL"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC5_BSSR"
            )}`}
            label="CMH_K21BC5_BSSR"
            text="BSSR"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC5_PCSR"
            )} mt-1`}
            label="CMH_K21BC5_PCSR"
            text="PCSR"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC5_NDE_MG"
            )}`}
            label="CMH_K21BC5_NDE_MG"
            text="NMG"
          />
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <div className="">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CMH_K21RU2_PCS_L"
            )}`}
            label="CMH_K21RU2_PCS_L"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CMH_K21RU2_MG"
            )} mt-2`}
            label="CMH_K21RU2_MG"
          />
        </div>
        <div className="">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CMH_K21RU2_PCS_R"
            )}`}
            label="CMH_K21RU2_PCS_R"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CMH_K21RU2_LS"
            )} mt-2`}
            label="CMH_K21RU2_LS"
            text="L"
          />
        </div>
      </div>
      <div className="position-absolute single-text-55 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC4_VGTU"
            )}`}
            label="CMH_K21BC4_VGTU"
            text="VGTU"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC4_PCSL"
            )} mt-1`}
            label="CMH_K21BC4_PCSL"
            text="PSSL"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC4_BSSL"
            )}`}
            label="CMH_K21BC4_BSSL"
            text="BSSL"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC4_PCSR"
            )} mt-1`}
            label="CMH_K21BC4_PCSR"
            text="PCSR"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC4_BSSR"
            )}`}
            label="CMH_K21BC4_BSSR"
            text="BSSR"
          />
        </div>
      </div>
      <div className="position-absolute single-text-56 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC3_NDE_MG"
            )}`}
            label="CMH_K21BC3_NDE_MG"
            text="NMG"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC3_VGTU"
            )} mt-1`}
            label="CMH_K21BC3_VGTU"
            text="VGTU"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC3_BSSL"
            )}`}
            label="CMH_K21BC3_BSSL"
            text="BSSL"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC3_PCSL1"
            )} mt-1`}
            label="CMH_K21BC3_PCSL1"
            text="PSCL1"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC3_PCSL2"
            )}`}
            label="CMH_K21BC3_PCSL2"
            text="PSCL2"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC3_PCSR2"
            )} mt-1`}
            label="CMH_K21BC3_PCSR2"
            text="PSCR2"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC3_BSSR"
            )}`}
            label="CMH_K21BC3_BSSR"
            text="BSSR"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC3_PCSR1"
            )} mt-1`}
            label="CMH_K21BC3_PCSR1"
            text="PSCR1"
          />
        </div>
      </div>
      <div className="position-absolute single-text-57 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC4_NDE_MG"
            )}`}
            label="CMH_511BC4_NDE_MG"
            text="NMG"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC4_VGTU"
            )}`}
            label="CMH_511BC4_VGTU"
            text="VGTU"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC4_BSSL"
            )}`}
            label="CMH_511BC4_BSSL"
            text="BSSL"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC4_PCSL1"
            )} mt-1`}
            label="CMH_511BC4_PCSL1"
            text="PSCL1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC4_PCSL2"
            )} mt-1`}
            label="CMH_511BC4_PCSL2"
            text="PSCL2"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC4_BSSR"
            )}`}
            label="CMH_511BC4_BSSR"
            text="BSSR"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC4_PCSR1"
            )} mt-1`}
            label="CMH_511BC4_PCSR1"
            text="PSCR1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC4_PCSR2"
            )} mt-1`}
            label="CMH_K21BC3_PCSR2"
            text="PSCR2"
          />
        </div>
      </div>
      <div className="position-absolute single-text-58 d-flex">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_K21BC1_NDE_MG"
              )}`}
              label="CMH_K21BC1_NDE_MG"
              text="NMG"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_K21BC1_VGTU"
              )}`}
              label="CMH_K21BC1_VGTU"
              text="VGTU"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_K21BC1_BSSL"
              )}`}
              label="CMH_K21BC1_BSSL"
              text="BSSL"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag mt-1 ${useColorStatus(
                "CMH_K21BC1_PCSL"
              )}`}
              label="CMH_K21BC1_PCSL"
              text="PCSL"
            />
          </div>
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_K21BC1_BSSR"
            )}`}
            label="CMH_K21BC1_BSSR"
            text="BSSR"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-1 ${useColorStatus(
              "CMH_K21BC1_PCSR"
            )}`}
            label="CMH_K21BC1_PCSR"
            text="PCSR"
          />
        </div>
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC1_NDE_MG"
              )}`}
              label="CMH_511BC1_NDE_MG"
              text="NMG"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC1_VGTU"
              )}`}
              label="CMH_511BC1_VGTU"
              text="VGTU"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC1_BSSL"
              )}`}
              label="CMH_511BC1_BSSL"
              text="BSSL"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC1_PCSL"
              )}`}
              label="CMH_511BC1_PCSL"
              text="PCSL"
            />
          </div>
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC1_PCSR"
            )}`}
            label="CMH_511BC1_PCSR"
            text="PCSR"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ml-2 ${useColorStatus(
              "CMH_511BC1_BSSR"
            )}`}
            label="CMH_511BC1_BSSR"
            text="BSSR"
          />
        </div>
      </div>
      <div className="position-absolute single-text-60 d-flex">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC2_NDE_MG"
              )}`}
              label="CMH_511BC2_NDE_MG"
              text="NMG"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC2_VGTU"
              )}`}
              label="CMH_511BC2_VGTU"
              text="VGTU"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC2_BSSL"
              )}`}
              label="CMH_511BC2_BSSL"
              text="BSSL"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC2_PCSL"
              )}`}
              label="CMH_511BC2_PCSL"
              text="PCSL"
            />
          </div>
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC2_PCSR"
            )}`}
            label="CMH_511BC2_PCSR"
            text="PCSR"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ml-2 ${useColorStatus(
              "CMH_511BC2_BSSR"
            )}`}
            label="CMH_511BC2_BSSR"
            text="BSSR"
          />
        </div>
      </div>
      <div className="position-absolute single-text-61 d-flex">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC3_NDE_MG"
              )}`}
              label="CMH_511BC3_NDE_MG"
              text="NMG"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC3_VGTU"
              )}`}
              label="CMH_511BC3_VGTU"
              text="VGTU"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC3_BSSL"
              )}`}
              label="CMH_511BC3_BSSL"
              text="BSSL"
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "CMH_511BC3_PCSL"
              )}`}
              label="CMH_511BC3_PCSL"
              text="PCSL"
            />
          </div>
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CMH_511BC3_PCSL"
            )}`}
            label="CMH_511BC3_PCSL"
            text="PCSL"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ml-2 ${useColorStatus(
              "CMH_511BC3_BSSR"
            )}`}
            label="CMH_511BC3_BSSR"
            text="BSSR"
          />
        </div>
      </div>
      <div className="position-absolute single-text-62 ">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_491BE1_ZSS"
          )}`}
          label="CMH_491BE1_ZSS"
          text="ZSS"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag mt-3 ${useColorStatus(
            "CMH_491BE1_LS2"
          )}`}
          label="CMH_491BE1_LS2"
          text="LS2"
        />
      </div>
      <div className="position-absolute single-text-63 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_491BC2_NDE_MG"
          )}`}
          label="CMH_491BC2_NDE_MG"
          text="NMG"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_491BC2_VGTU"
          )}`}
          label="CMH_491BC2_VGTU"
          text="VGTU"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_491BC2_BSSL"
          )}`}
          label="CMH_491BC2_BSSL"
          text="BSSL"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_491BC2_PCS"
          )}`}
          label="CMH_491BC2_PCS"
          text="PCSL"
        />
      </div>
      <div className="position-absolute single-text-64 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_491BC2_PCSR"
          )}`}
          label="CMH_491BC2_PCSR"
          text="PCSR"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_491BC2_BSSR"
          )}`}
          label="CMH_491BC2_BSSR"
          text="BSSR"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_491BC2_DE_MG"
          )}`}
          label="CMH_491BC2_DE_MG"
          text="DMG"
        />
      </div>
      <div className="position-absolute single-text-65  text-center">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("CMH_491BE1_ZS")}`}
          label="CMH_491BE1_ZS"
          text="ZS"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_491BE1_TS"
          )} mt-2`}
          label="CMH_491BE1_TS"
          text="TS"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_491BE1_BMS"
          )} mt-2`}
          label="CMH_491BE1_BMS"
          text="BMS"
        />
      </div>
      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-66 ${useColorStatus(
          "CMH_511BC1_DE_MG"
        )}`}
        label="CMH_511BC1_DE_MG"
        text="DMG"
      />
      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-67 ${useColorStatus(
          "CMH_511BC2_DE_MG"
        )}`}
        label="CMH_511BC2_DE_MG"
        text="DMG"
      />
      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-68 ${useColorStatus(
          "CMH_511BC3_DE_MG"
        )}`}
        label="CMH_511BC3_DE_MG"
        text="DMG"
      />

      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-69 ${useColorStatus(
          "CMH_K21BC1_DE_MG"
        )}`}
        label="CMH_K21BC1_DE_MG"
        text="DMG"
      />

      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-70 ${useColorStatus(
          "CMH_K21BC5_DE_MG"
        )}`}
        label="CMH_K21BC5_DE_MG"
        text="DMG"
      />
      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-71 ${useColorStatus(
          "CMH_511BC4_DE_MG"
        )}`}
        label="CMH_511BC4_DE_MG"
        text="DMG"
      />
      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-72 ${useColorStatus(
          "CMH_K21BC3_DE_MG"
        )}`}
        label="CMH_K21BC3_DE_MG"
        text="DMG"
      />
      <div className="position-absolute single-text-73 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_K21BC4_DE_MG"
          )}`}
          label="CMH_K21BC4_DE_MG"
          text="DMG"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CMH_K21BC4_NDE_MG"
          )}`}
          label="CMH_K21BC4_NDE_MG"
          text="NMG"
        />
      </div>
    </div>
  );
};

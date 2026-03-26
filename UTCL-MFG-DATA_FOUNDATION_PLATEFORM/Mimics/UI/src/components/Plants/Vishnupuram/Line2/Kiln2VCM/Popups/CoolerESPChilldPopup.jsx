import { useColorStatus } from "../../../../../../utils";
import { BlackContainer } from "../../../../../BlackContainer/BlackContainer";
import { MotorCircleDigitalTag } from "../../../../../DigitalTags";
import { TextContainerWithWrapWord } from "../../../../../Nathdwara";
import { PipeWithCircles } from "../../../../../Pipe/PipeWithCircles";

export const CoolerESPChilldPopup = () => {
  return (
    <div className="p-1">
      <div className="text-white text-center bb-1">COOLER ESP CHAMBERS</div>
      <div className="d-flex justify-content-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "cgreentext",
              label: "CHAMBER-1",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `grayDot`,
            }}
            text={{ useClass: "text-dark", label: "K2_CESP1" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus(
                "K2_CESP1"
              )}`,
              secondCircleLabel: "K2_CESP1",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CESP1_KV",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex justify-content-between">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "K2_CESP_HOP1_LS"
              )} mt-1`}
              label="K2_CESP_HOP1_LS"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "K2_CESP_HOP2_LS"
              )} mt-1`}
              label="K2_CESP_HOP2_LS"
            />
          </div>
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "cgreentext",
              label: "CHAMBER-2",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `grayDot`,
            }}
            text={{ useClass: "text-dark", label: "K2_CESP1" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus(
                "K2_CESP2"
              )}`,
              secondCircleLabel: "K2_CESP2",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CESP2_KV",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex justify-content-between">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "K2_CESP_HOP3_LS"
              )} mt-1`}
              label="K2_CESP_HOP3_LS"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "K2_CESP_HOP4_LS"
              )} mt-1`}
              label="K2_CESP_HOP4_LS"
            />
          </div>
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "cgreentext",
              label: "CHAMBER-3",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `grayDot`,
            }}
            text={{ useClass: "text-dark", label: "K2_CESP1" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useColorStatus(
                "K2_CESP3"
              )}`,
              secondCircleLabel: "K2_CESP3",
            }}
          />
          <BlackContainer
            data={{
              label: "K2_CESP3_KV",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex justify-content-between">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "K2_CESP_HOP5_LS"
              )} mt-1`}
              label="K2_CESP_HOP5_LS"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "K2_CESP_HOP6_LS"
              )} mt-1`}
              label="K2_CESP_HOP6_LS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

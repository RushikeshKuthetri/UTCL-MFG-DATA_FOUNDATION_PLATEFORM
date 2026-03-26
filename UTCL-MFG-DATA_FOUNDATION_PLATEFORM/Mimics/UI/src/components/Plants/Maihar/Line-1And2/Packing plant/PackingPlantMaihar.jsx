import { useColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  MotorCircleDigitalTag,
  PipeWithCircles,
} from "../../../../index";

export const PackingPlantMaihar = () => {
  return (
    <div className="PackingPlantMaihar w-100 h-100 position-relative">
      <div className="yellowline-Hr position-absolute line-1"></div>
      <div className="yellowline-Hr position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-10"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-11"></div>
      <div className="containerImage text-center d-flex flex-column justify-content-around align-items-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PACKER 4",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mt-5 digital-tag ${useColorStatus("74PD-4-FB")}`}
          label="74PD-4-FB"
        />
      </div>
      <div className="containerImage text-center d-flex flex-column justify-content-around align-items-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PACKER 3",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mt-5 digital-tag ${useColorStatus("73PD-3-FB")}`}
          label="73PD-3-FB"
        />
      </div>
      <div className="containerImage text-center d-flex flex-column justify-content-around align-items-center position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PACKER 2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mt-5 digital-tag ${useColorStatus("72PD-2-FB")}`}
          label="72PD-2-FB"
        />
      </div>
      <div className="containerImage text-center d-flex flex-column justify-content-around align-items-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PACKER 1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mt-5 digital-tag ${useColorStatus("71PD-1-FB")}`}
          label="71PD-1-FB"
        />
      </div>
      <div className="containerImage position-absolute single-text-5"></div>
      <div className="truck position-absolute single-text-6"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("74BDB-4-FB")}`,
          secondCircleLabel: "74BDB-4-FB",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("73BDB-3B-FB")}`,
          secondCircleLabel: "73BDB-3B-FB",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("73BDB-3A-FB")}`,
          secondCircleLabel: "73BDB-3A-FB",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("72BDB-2B-FB")}`,
          secondCircleLabel: "72BDB-2B-FB",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("72BDB-2A-FB")}`,
          secondCircleLabel: "72BDB-2A-FB",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-12"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("71BDB-1-FB")}`,
          secondCircleLabel: "71BDB-1-FB",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-13"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: "grayDot",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-14"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: "grayDot",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-15"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: "grayDot",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: "grayDot",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("74PB_4")}`,
          secondCircleLabel: "74PB_4",
          secondCircleText: "X",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("73PB_3B")}`,
          secondCircleLabel: "73PB_3B",
          secondCircleText: "X",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-19"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("73PB_3A")}`,
          secondCircleLabel: "73PB_3A",
          secondCircleText: "X",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("72PB_2B")}`,
          secondCircleLabel: "72PB_2B",
          secondCircleText: "X",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-21"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("72PB_2A")}`,
          secondCircleLabel: "72PB_2A",
          secondCircleText: "X",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-22"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("71PB_1")}`,
          secondCircleLabel: "71PB_1",
          secondCircleText: "X",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-23" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-24" />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-25",
          label: "DISCH BELT 4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-26",
          label: "DISCH BELT 3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-27",
          label: "DISCH BELT 2B",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-28",
          label: "DISCH BELT 2A",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-29",
          label: "DISCH BELT 1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-30",
          label: "PACKER BELT 4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-31",
          label: "PACKER BELT 3B",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-32",
          label: "PACKER BELT 3A",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-33",
          label: "PACKER BELT 2B",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-34",
          label: "PACKER BELT 2A",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-35",
          label: "PACKER BELT 1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-36",
          label: "CROSS BELT 1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-37",
          label: "CROSS BELT 2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-38",
          label: "CROSS BELT 3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-39",
          label: "CROSS BELT 4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-40",
          label: "HOPPER 2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-41",
          label: "TO TRUCK LOADING BELT",
        }}
      />
      <div className="img-66 position-absolute single-text-42">
        <div className="connector-both-side">
          <div className="dot p-3 grey-color"></div>
        </div>
      </div>
      <div className="img-66 position-absolute single-text-43">
        <div className="connector-both-side">
          <div className="dot p-3 grey-color"></div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center position-absolute single-text-44">
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center position-absolute single-text-45">
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center position-absolute single-text-46">
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center position-absolute single-text-47">
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center position-absolute single-text-48">
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center position-absolute single-text-49">
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="d-flex justify-content-between align-items-center position-absolute single-text-50">
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
      <div className="d-flex justify-content-between align-items-center position-absolute single-text-51">
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
      <div className="d-flex justify-content-between align-items-center position-absolute single-text-52">
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
      <div className="d-flex justify-content-between align-items-center position-absolute single-text-53">
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
};

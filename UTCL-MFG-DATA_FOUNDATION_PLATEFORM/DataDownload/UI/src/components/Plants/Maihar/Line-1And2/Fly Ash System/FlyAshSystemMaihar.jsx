import {
  TextContainerWithWrapWord,
  BlackContainer,
  SingleText,
  MotorCircleDigitalTag,
} from "../../../../index";

import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const FlyAshSystemMaihar = () => {
  return (
    <div className="FlyAshSystemMaihar w-100 h-100 position-relative">
      <div className="yellowline-Hr bg-dark position-absolute line-1"></div>
      <div className="yellowline-Hr bg-dark position-absolute line-2"></div>
      <div className="yellowline-Hr bg-dark position-absolute line-3"></div>
      <div className="yellowline-Hr bg-dark position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Hr position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Vr bg-dark position-absolute line-17"></div>
      <div className="yellowline-Vr bg-dark position-absolute line-18"></div>
      <div className="yellowline-Vr bg-dark position-absolute line-19"></div>
      <div className="yellowline-Vr bg-dark position-absolute line-20"></div>
      <div className="yellowline-Vr bg-dark position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr upArrow position-absolute line-28"></div>
      <div className="yellowline-Vr upArrow position-absolute line-29"></div>
      <div className="yellowline-Vr upArrow position-absolute line-30"></div>
      <div className="yellowline-Vr upArrow position-absolute line-31"></div>
      <div className="yellowline-Vr upArrow position-absolute line-32"></div>
      <div className="yellowline-Vr upArrow position-absolute line-33"></div>
      <div className="yellowline-Vr upArrow position-absolute line-34"></div>
      <div className="yellowline-Vr upArrow position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div>

      <div className="dashedHr-Pipe position-absolute single-text-8"></div>
      <div className="dashedHr-Pipe position-absolute single-text-9"></div>
      <div className="dashedHr-Pipe position-absolute single-text-10"></div>
      <SingleText
        useClass="containerImage text-center pt-3 position-absolute single-text-1"
        yellowTextUp="CM1 & 2 MULTICORE"
        textClass="bg-light text-primary yellowTxt mx-auto"
        data={{
          blackTextLabel: "_61FAHLVS",
          blackTextClass: "greenTxt mt-3",
          unit: "Mtr",
        }}
      />
      <SingleText
        useClass="containerImage text-center pt-3 position-absolute single-text-2"
        yellowTextUp="CM3 MULTICORE"
        textClass="bg-light text-primary yellowTxt mx-auto"
        data={{
          blackTextLabel: "63FAHLVS",
          blackTextClass: "greenTxt mt-3",
          unit: "mtr",
        }}
      />
      <div className="text-center position-absolute single-text-3">
        <div className="greenSqure mx-auto"></div>
        <div className="containerImage">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mx-auto",
              label: "DC DP",
            }}
          />
        </div>
        {/* <div className="bg-red width-fit-content circle-group">
          <div className="circle-img digital-tag c-img-2"></div>
          <span className="c-text"> E </span>
        </div> */}

        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("61FADCRF")}`}
          label="61FADCRF"
        />
      </div>
      <div className="containerImage position-absolute single-text-4"></div>
      <div className="text-center position-absolute single-text-5">
        <SingleText
          useClass="containerImage"
          yellowTextUp="BIN WT"
          textClass="text-dark mx-auto"
          data={{
            blackTextLabel: "61FABW",
            blackTextClass: "greenTxt mt-3",
            unit: "Ton",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus("NA")}`}
          label="NA"
        />
        <div className="pipeVr position-relative d-flex mt-1">
          <i className="fa-solid fa-caret-up d-block m-auto"></i>
        </div>
      </div>
      <div className="text-center position-absolute single-text-6">
        <SingleText
          useClass="containerImage"
          yellowTextUp="BIN WT"
          textClass="text-dark"
          data={{
            blackTextLabel: "_62FABW",
            blackTextClass: "greenTxt mt-3",
            unit: "Ton",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus("NA")}`}
          label="NA"
        />
        <div className="pipeVr position-relative mt-1"></div>
      </div>
      <div className="text-center position-absolute single-text-7">
        <SingleText
          useClass="containerImage"
          yellowTextUp="BIN WT"
          textClass="text-dark"
          data={{
            blackTextLabel: "_63FABW",
            blackTextClass: "greenTxt mt-3",
            unit: "Ton",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus("NA")}`}
          label="NA"
        />
        <div className="pipeVr position-relative mt-1"></div>
      </div>

      <div className="dashedHr-Pipe position-absolute single-text-11"></div>
      <div className="dashedHr-Pipe position-absolute single-text-12"></div>
      <div className="dashedHr-Pipe position-absolute single-text-13"></div>
      <div className="position-absolute single-text-14">
        <div className="img-66">
          <div className="connector-icon">
            {/* <div className="circle-group">
              <div className="green-line-circle"></div>
              <span className="c-text"> E </span>
            </div> */}

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("63FARB1")}`}
              label="63FARB1"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto mt-3",
            label: "RB1",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <div className="img-66">
          <div className="connector-icon">
            {/* <div className="circle-group">
              <div className="green-line-circle"></div>
              <span className="c-text"> E </span>
            </div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("61FARB1")}`}
              label="61FARB1"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto mt-3",
            label: "RB1",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <div className="img-66">
          <div className="connector-icon">
            {/* <div className="circle-group">
              <div className="green-line-circle"></div>
              <span className="c-text"> E </span>
            </div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("62FAASB")}`}
              label="62FAASB"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto mt-3",
            label: "62FAASB",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <div className="img-66">
          <div className="connector-icon">
            {/* <div className="circle-group">
              <div className="green-line-circle"></div>
              <span className="c-text"> E </span>
            </div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("61FARB2")}`}
              label="61FARB2"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto mt-3",
            label: "RB2",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <div className="img-66">
          <div className="connector-icon">
            {/* <div className="circle-group">
              <div className="green-line-circle"></div>
              <span className="c-text"> E </span>
            </div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "61FAASB1"
              )}`}
              label="61FAASB1"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto mt-3",
            label: "61FAASB",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <div className="img-66">
          <div className="connector-icon">
            {/* <div className="circle-group">
              <div className="green-line-circle"></div>
              <span className="c-text"> E </span>
            </div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("63FARB2")}`}
              label="63FARB2"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto mt-3",
            label: "RB2",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <div className="img-66">
          <div className="connector-icon">
            {/* <div className="circle-group">
              <div className="green-line-circle"></div>
              <span className="c-text"> E </span>
            </div> */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("63FAASB")}`}
              label="63FAASB"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto mt-3",
            label: "63FAASB",
          }}
        />
      </div>
      <div className="tringle-item position-absolute single-text-21">
        <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
        <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
      </div>
      <div className="tringle-item position-absolute single-text-22">
        <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
        <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
      </div>
      <div className="position-absolute single-text-23">
        <div className="yellowline-Vr upArrow position-relative ml-2"></div>
        <div className="connector-icon">
          {/* <div className="bg-red circle-group">
            <div className="green-line-circle"></div>
            <span className="c-text"> E </span>
            <span className="c-text-2">FR </span>
          </div> */}
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("61FADCF")}`}
            label="61FADCF"
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="yellowline-Vr upArrow position-relative ml-2"></div>
        <div className="connector-icon">
          {/* <div className="bg-red circle-group">
            <div className="green-line-circle"></div>
            <span className="c-text"> E </span>
          </div> */}
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("63FADCF")}`}
            label="63FADCF"
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-25",
          label: "FADCF",
        }}
      />
      <BlackContainer
        data={{
          label: "61PT16_IO",
          useClass: "greenTxt position-absolute single-text-26",
          unit: "mmWG",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-27",
          label: "FADCRF",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-28",
          label: "FROM TANKER",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-29"
        yellowTextUp="BIN DV POS"
        textClass="yellowTxt"
        data={{
          blackTextLabel: "61BINDVPOS",
          blackTextClass: "greenTxt mt-2",
          unit: "%",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-30"
        yellowTextUp="DOSING VLV POS"
        textClass="yellowTxt"
        data={{
          blackTextLabel: "MC DV POS",
          blackTextClass: "greenTxt mt-2 mx-auto",
          unit: "%",
        }}
      />
      <div className="boxContainer position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "FLYASH WF",
            useClass: "greenTxt mt-2",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FLYASH WF",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "63PT15",
          useClass: "greenTxt position-absolute single-text-32",
          unit: "mmwg",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-33",
          label: "TO SEPARATOR 1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-34",
          label: "TO SEPARATOR 2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-35",
          label: "TO SEPARATOR 3",
        }}
      />

      <div className="boxContainer position-absolute single-text-36">
        <BlackContainer
          data={{
            label: "62FARAV",
            useClass: "greenTxt mt-2",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "62FARAV",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <SingleText
        useClass="position-absolute single-text-37"
        yellowTextUp="DOSING VLV POS"
        textClass="yellowTxt"
        data={{
          blackTextLabel: "62MCDVPOS",
          blackTextClass: "greenTxt mt-2 mx-auto",
          unit: "%",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-38"
        yellowTextUp="DOSING VLV POS"
        textClass="yellowTxt"
        data={{
          blackTextLabel: "_63FARAVRPM",
          blackTextClass: "greenTxt mt-2 mx-auto",
          unit: "%",
        }}
      />
      <div className="boxContainer position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "63FARAV",
            useClass: "greenTxt mt-2",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "63FARAV",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <div className="d-flex">
          <div className="graySqure"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "62FAPNG OPEN",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <div className="graySqure"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "62FAPNG CLOSE",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-41">
        <div className="d-flex">
          <div className="graySqure"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "63FAPNG OPEN",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <div className="graySqure"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt ml-3",
              label: "63FAPNG CLOSE",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "63FARAV",
          useClass: "greenTxt position-absolute single-text-42",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};

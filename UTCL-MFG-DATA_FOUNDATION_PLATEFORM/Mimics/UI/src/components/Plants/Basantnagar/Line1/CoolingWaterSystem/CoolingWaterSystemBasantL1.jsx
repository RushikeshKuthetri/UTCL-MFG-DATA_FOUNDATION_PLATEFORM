import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag } from "../../../../index";

import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const CoolingWaterSystemBasantL1 = () => {
  return (
    <div className="CoolingWaterSystemBasantL1 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CURRENT",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CTF1_SI",
              useClass: "greenTxt",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CTF1_II",
              useClass: "greenTxt  mt-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />

          <div className="containerImage text-center">
            <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus("CTF1")}`} label="CTF1" />
          </div>
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CTF2_SI",
              useClass: "greenTxt ",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CTF2_II",
              useClass: "greenTxt mt-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage text-center">
            <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus("CTF2")}`} label="CTF2" />
          </div>
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CTF3_SI",
              useClass: "greenTxt",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CTF3_II",
              useClass: "greenTxt mt-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage text-center">
            <MotorCircleDigitalTag className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus("CTF3")}`} label="CTF3" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex bg-info p-2">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPEED",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CURRENT",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CWP1_SI",
              useClass: "greenTxt",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CWP1_II",
              useClass: "greenTxt  mt-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CWP2_SI",
              useClass: "greenTxt ",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CWP2_II",
              useClass: "greenTxt mt-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CWP3_SI",
              useClass: "greenTxt",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CWP3_II",
              useClass: "greenTxt mt-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex bg-secondary p-2">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TURBINE EXH TEMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "RAW WATER PR",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "TREXHS_TI",
              useClass: "greenTxt",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RAWW_PI",
              useClass: "greenTxt mt-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "VIB.OIL SW",
            }}
          />
          <MotorCircleDigitalTag className={`square ml-2 digital-tag ${useColorStatus("CTF1_VS")}`} label="CTF1_VS" />
        </div>

        <MotorCircleDigitalTag className={`square mx-auto digital-tag ${useColorStatus("CTF2_VS")}`} label="CTF2_VS" />

        <MotorCircleDigitalTag className={`square mx-auto digital-tag ${useColorStatus("CTF3_VS")}`} label="CTF3_VS" />
      </div>
      <div className="position-absolute single-text-5 d-flex flex-column">
        <div className="d-flex gap-1">
          <BlackContainer
            data={{
              label: "OCWIL_TI",
              useClass: "greenTxt mt-1 ml-3",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CRCWIL_TI",
              useClass: "greenTxt mt-1 ml-3",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GRACWIL_TI",
              useClass: "greenTxt mt-1 ml-3",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-1">
          <BlackContainer
            data={{
              label: "OCWOL_TI",
              useClass: "greenTxt mt-1 ml-3",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CRCWOL_TI",
              useClass: "greenTxt mt-1 ml-3",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GRACWOL_TI",
              useClass: "greenTxt mt-1 ml-3",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 ">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CONDENSOR VACUUM",
            }}
          />
          <BlackContainer
            data={{
              label: "VACUM_PI",
              useClass: "greenTxt mt-1 ml-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "LUBE OIL TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "LOIL_TI",
              useClass: "greenTxt mt-1 ml-2",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EJECTOR PRDS TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "EPRDS_TI",
              useClass: "greenTxt mt-1 ml-2",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HOTWELL TEMP.",
            }}
          />
          <BlackContainer
            data={{
              label: "CWTCEPOL_TI",
              useClass: "greenTxt mt-1 ml-2",
              unit: "DegC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CWP1")}`} label="CWP1" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CWP-1",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CWP2")}`} label="CWP2" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CWP-2",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CWP3_VFD")}`} label="CWP3_VFD" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CWP-3",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("ACWP1")}`} label="ACWP1" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ACWP-1",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("ACWP2")}`} label="ACWP2" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ACWP-2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div>
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <div>
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <div>
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <div>
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <div>
          <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <div className="d-flex gap-1">
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
        </div>
        <div className="d-flex mt-3 gap-1">
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex gap-1">
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
        </div>
        <div className="d-flex mt-3 gap-1">
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <div className="d-flex gap-1">
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
        </div>
        <div className="d-flex mt-3 gap-1">
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-down d-block grey-color-caret"></i>
            <i className="fa-solid fa-caret-up d-block grey-color-caret"></i>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "SF-A",
            }}
          />
          <div className="containerImage text-center"></div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "SF-B",
            }}
          />
          <div className="containerImage text-center"></div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "SF-C",
            }}
          />
          <div className="containerImage text-center"></div>
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div>
          <div className="containerImage text-center"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "MGF-1",
            }}
          />
        </div>
        <div>
          <div className="containerImage text-center"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "MGF-2",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mr-2 position-absolute single-text-14 text-center p-1 box-1  bg-info",
          label: "COOLING WATER BASIN",
        }}
      />
      <div className="position-absolute single-text-15">
        <div>
          <div className="yellowline-Vr position-absolute line-1"></div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CWP-1",
            }}
          />
        </div>
        <div className="mt-2">
          <div className="yellowline-Vr position-absolute line-1"></div>
          <i className="fas fa-long-arrow-alt-up ml-2"></i>
          <div className="connector-icon p-1">
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CWP-2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CTF-1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CTF-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CTF-3",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>


      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div>
      <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div>
      <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      <div>
      <i className="fa-solid fa-caret-up d-block"></i>
      </div>
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div>
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      </div>
      <div className="position-absolute single-text-21">
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div className="position-absolute single-text-22">
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div className="position-absolute single-text-23">
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div className="position-absolute single-text-24">
      <i className="fa-solid fa-caret-down d-block"></i>
      </div>
      <div className="yellowline-Hr position-absolute line-2"></div>
      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>
      <div className="yellowline-Vr position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="yellowline-Hr position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Vr position-absolute line-25"></div>
      <div className="yellowline-Vr position-absolute line-26"></div>
      <div className="yellowline-Vr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Hr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Vr position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Vr position-absolute line-35"></div>
      <div className="yellowline-Vr position-absolute line-36"></div>
      <div className="yellowline-Vr position-absolute line-37"></div>
      <div className="yellowline-Vr position-absolute line-38"></div>
      <div className="yellowline-Vr position-absolute line-39"></div>
      <div className="yellowline-Vr position-absolute line-40"></div>
      <div className="yellowline-Vr position-absolute line-41"></div>
      <div className="yellowline-Vr position-absolute line-42"></div>
      <div className="yellowline-Hr position-absolute line-43"></div>
      <div className="yellowline-Vr upArrow position-absolute line-44"></div>
    </div>
  );
};

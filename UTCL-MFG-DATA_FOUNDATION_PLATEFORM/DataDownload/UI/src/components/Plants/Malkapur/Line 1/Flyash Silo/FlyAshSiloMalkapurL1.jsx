import { BlackContainer, PipeWithCircles, MimicCaret, BlueContainerWithDynamicBorder, MotorCircleDigitalTag, TextContainerWithWrapWord } from "../../../../index";
import { useColorStatus, useCaretColorStatus, useFanImgTagsColorStatus, useBorderTagsColorStatus, useFanImgsTagsColorStatusForNewPlantScreens } from "../../../../../utils";

export const FlyAshSiloMalkapurL1 = () => {
  return (
    <div className="FlyAshSiloMalkapurL1 w-100 h-100 position-relative">
      <div className="containerImage pt-2 position-absolute single-text-1 text-center">
        <BlackContainer
          data={{
            label: "FLSOLVL",
            useClass: "greenTxt",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-2"></div>
      <div className="position-absolute single-text-3 d-flex flex-column">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-2",
              label: "FL101",
            }}
          />
          <div className="img-66">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("FL101/M")}`} label="FL101/M" />
          </div>
          <div className="yellowline-Hr line-1"></div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-2",
              label: "FL102",
            }}
          />
          <div className="img-66">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("FL102/M")}`} label="FL102/M" />
          </div>
          <div className="yellowline-Hr line-1"></div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-2",
              label: "FL105",
            }}
          />
          <div className="img-66">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("FL105/M")}`} label="FL105/M" />
          </div>
          <div className="yellowline-Hr line-2"></div>
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex flex-column">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-2",
              label: "FL103",
            }}
          />
          <div className="img-66">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("FL103/M")}`} label="FL103/M" />
          </div>
          <div className="yellowline-Hr line-1"></div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-2",
              label: "FL104",
            }}
          />
          <div className="img-66">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("FL1034M")}`} label="FL1034M" />
          </div>
          <div className="yellowline-Hr line-1"></div>
        </div>
      </div>
      <div className="reject-bin position-absolute single-text-5 text-center pt-2">
        <BlackContainer
          data={{
            label: "FA_BINWT/UM",
            useClass: "greenTxt",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-2",
            label: "FL107",
          }}
        />
        <div className="pipe dotted-pipe mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("FL107/M")} `} label="FL107/M" text="M" />
        </div>
      </div>
      <div className=" position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FL202",
          }}
        />
        <div className="pipe dotted-pipe mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("FL202/M")} `} label="FL202/M" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div className="d-flex">
          <BlueContainerWithDynamicBorder useClass={`mx-auto ${useBorderTagsColorStatus("FL114A/V")}`} isClickable={true} tagLabel="FL114A/V" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FL114",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "FL114/SP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FL114/POSVAL",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <MimicCaret
          parentClass="d-flex mt-1 tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("FL114A/V")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("FL114A/V")}`}
          label="FL114A/V"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "FL114A",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "FL10751",
          useClass: "greenTxt  position-absolute single-text-10",
          unit: "amp",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "S.F.M",
          }}
        />
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "FL115/SP",
              useClass: "greenTxt",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FL115/TPH_FB",
              useClass: "greenTxt   mt-1",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FL115/SFMPOS",
              useClass: "greenTxt   mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-12" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-13" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-14" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-15" />

      <div className="position-absolute single-text-16">
        <div className="d-flex">
          <div className="yellowline-Vr upArrow  line-212 ml-auto"></div>
          <div className="squareplustri text-center pt-2">
            <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("FL112/M")}`} label="FL112/M" />
          </div>
          <div className="yellowline-Vr downArrow line-1"></div>
          <div className="yellowline-Hr line-2"></div>
        </div>
        <div className="line-circle-1 position-absolute">
          <div className="connector-icon">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("FL111/M")}`} label="FL111/M" text="M" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FL111",
            }}
          />
        </div>
        <MotorCircleDigitalTag className={`circle-img ml-1 digital-tag ${useFanImgTagsColorStatus("FL112/M")}`} label="FL112/M" />
      </div>
      <div className="position-absolute single-text-17">
        <div className="d-flex">
          <div className="yellowline-Vr upArrow  line-212 ml-auto"></div>
          <div className="squareplustri text-center pt-2">
            <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("FL204")}`} label="FL204" />
          </div>
          <div className="yellowline-Vr downArrow line-1"></div>
          <div className="yellowline-Hr line-2"></div>
        </div>
        <div className="line-circle-1 position-absolute">
          <div className="connector-icon">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("FL204/M")}`} label="FL204/M" text="M" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FL204",
            }}
          />
        </div>
        <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("FL205/M")}`} label="FL205/M" />
      </div>
      <div className="position-absolute single-text-18">
        <div className="d-flex">
          <div className="yellowline-Vr upArrow  line-212 ml-auto"></div>
          <div className="squareplustri text-center pt-2">
            <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("FL109")} `} label="FL109" />
          </div>
          <div className="yellowline-Vr downArrow line-1"></div>
          <div className="yellowline-Hr line-2"></div>
        </div>
        <div className="line-circle-1 position-absolute">
          <div className="connector-icon">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("FL109/M")}`} label="FL109/M" text="M" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FL109",
            }}
          />
        </div>
        <MotorCircleDigitalTag className={`circle-img ml-1  digital-tag ${useFanImgTagsColorStatus("FL110/M")}`} label="FL110/M" />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-19",
          label: "FL110",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-20",
          label: "FL205",
        }}
      />
      <div className="position-absolute single-text-21 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "LINE-1 SIDE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LINE-2 SIDE",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`line-circle  digital-tag ${useColorStatus("FL108/M")}`} label="FL108/M" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "FL108",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`line-circle  digital-tag ${useColorStatus("FL106/M")}`} label="FL106/M" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "FL106",
          }}
        />
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <div>
          <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
          <div className="connector-icon">
            <MotorCircleDigitalTag className={`line-circle  digital-tag ${useColorStatus("FL203/M")}`} label="FL203/M" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FL203",
            }}
          />
        </div>
        <div>
          <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
          <div className="connector-icon">
            <MotorCircleDigitalTag className={`line-circle  digital-tag ${useColorStatus("FL201/M")}`} label="FL201/M" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FL201",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "FL215/SP",
          useClass: "greenTxt position-absolute single-text-25",
          unit: "Ton",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-26 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FL115",
          }}
        />
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("FL115/M")} `} label="FL115/M" />
      </div>
      <div className="yellowline-Vr  position-absolute line-1"></div>
      <div className="yellowline-Vr  position-absolute line-3"></div>
      <div className="yellowline-Vr  position-absolute line-4"></div>
      <div className="yellowline-Vr  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Hr  position-absolute line-7"></div>
      <div className="yellowline-Hr  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
    </div>
  );
};

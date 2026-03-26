import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  BlueContainerWithDynamicBorder,
} from "../../index";
import * as tagsdata from "../../../data/wanakbori/MaterialTransport/wanakboriMaterialTransportTextcolumn";
import {
  useBorderTagsColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../utils";

export const MaterialTransport = () => {
  return (
    <div className=" MaterialTransport  w-100 h-100 position-relative ">
      <div className="yellowline-Vr downArrow position-absolute pipe-1"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-2"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-3"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-4"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-5"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-6"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-7"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-8"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-9"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-10"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-11"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-12"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-13"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-14"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Hr  position-absolute pipe-19"></div>
      <div className="yellowline-Hr  position-absolute pipe-20"></div>
      <div className="yellowline-Hr  position-absolute pipe-21"></div>
      <div className="yellowline-Hr  position-absolute pipe-22"></div>
      <div className="yellowline-Vr  position-absolute pipe-23"></div>
      <div className="yellowline-Vr  position-absolute pipe-24"></div>
      <div className="yellowline-Hr  position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Hr  position-absolute pipe-29"></div>
      <div className="yellowline-Hr  position-absolute pipe-30"></div>
      <div className="yellowline-Hr  position-absolute pipe-31"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr  position-absolute pipe-37"></div>
      <div className="yellowline-Vr  position-absolute pipe-38"></div>
      <div className="yellowline-Vr  position-absolute pipe-39"></div>
      <div className="yellowline-Vr  position-absolute pipe-40"></div>
      <div className="yellowline-Vr  position-absolute pipe-41"></div>
      <div className="yellowline-Vr downArrow  position-absolute pipe-42"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr  position-absolute pipe-44"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-45"></div>
      <div className="squareplustri position-absolute single-text-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "WET FLYASH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "K91HP2",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "GYPSUM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "K91HP1",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-3 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "COAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "L91HP1",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-4 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GYPSUM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "512HP2",
          }}
        />
        <BlackContainer
          data={{
            label: "512HP2_LT01",
            useClass: "greenTxt mx-auto mt-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GIR-2",
          }}
        />
        <span className={`square ${useColorStatus("512HP2_SEL04")}`}>S</span>
      </div>
      <div className="squareplustri position-absolute single-text-5 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "WET FLYASH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "512HP3",
          }}
        />
        <BlackContainer
          data={{
            label: "512HP3_LT01",
            useClass: "greenTxt mx-auto mt-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GIR-2",
          }}
        />
        <span className={`square ${useColorStatus("512HP3_SEL03")}`}>S</span>
      </div>
      <div className="squareplustri position-absolute single-text-6 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "WET FLYASH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "511HP3",
          }}
        />
        <BlackContainer
          data={{
            label: "511HP3_LT01",
            useClass: "greenTxt mx-auto mt-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GIR-1",
          }}
        />
        <span className={`square ${useColorStatus("511HP3_SEL02")}`}>S</span>
      </div>
      <div className="squareplustri position-absolute single-text-7 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GYPSUM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "511HP2",
          }}
        />
        <BlackContainer
          data={{
            label: "511HP2_LT01",
            useClass: "greenTxt mx-auto mt-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GIR-1",
          }}
        />
        <span className={`square ${useColorStatus("511HP2_SEL01")}`}>S</span>
      </div>
      <div className="squareplustri position-absolute single-text-8 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "RAW COAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "L91HP2",
          }}
        />
        <BlackContainer
          data={{
            label: "L91HP2_LT01",
            useClass: "greenTxt mx-auto mt-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <span className={`square ${useColorStatus("L91HP2_SEL05")}`}>S</span>
      </div>
      <div className="hpipecircle position-absolute single-text-9">
        <span className="dot grey-color"></span>
        <span className={`dot ${useColorStatus("K91FB1_BDS")}`}>B</span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K91FB1",
          }}
        />
        <span className={`dot ${useColorStatus("K91FB1")}`}>M</span>
      </div>
      <div className="hpipecircle position-absolute single-text-10">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K91AF1",
          }}
        />
        <span className={`dot ${useColorStatus("K91AF1")}`}>M</span>
      </div>
      <div className="hpipecircle position-absolute single-text-11">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91AF1",
          }}
        />
        <span className={`dot ${useColorStatus("L91AF1")}`}> M</span>
      </div>
      <div className="hpipecircle position-absolute single-text-12">
        <span className="dot grey-color"></span>
        <span className={`dot ${useColorStatus("L91BC3_PCS")}`}>X</span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91BC3",
          }}
        />
        <span className={`dot ${useColorStatus("L91BC3_BDS")}`}>B</span>
        <span className={`dot ${useColorStatus("L91BC3")}`}>M</span>
      </div>
      <div className="hpipecircle position-absolute single-text-13">
        <span className="dot grey-color"></span>
        <span className={`dot ${useColorStatus("K91BC2_TP_ZSS")}`}>Z1</span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K91BC2",
          }}
        />
        <span className={`dot ${useColorStatus("K91BC2_PCS")}`}>X</span>
        <span className={`dot ${useColorStatus("K91BC2_BDS")}`}>B</span>
        <span className={`dot ${useColorStatus("K91BC2")}`}>M</span>
      </div>
      <div className="hpipecircle position-absolute single-text-14">
        <span className="dot grey-color"></span>
        <span className={`dot ${useColorStatus("K91BC3_PCS")}`}>X</span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K91BC3",
          }}
        />
        <span className={`dot ${useColorStatus("K91BC3_BDS")}`}>B</span>
        <span className={`dot ${useColorStatus("K91BC3")}`}>M</span>
      </div>
      <div className="hpipecircle position-absolute single-text-15">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K91BC5",
          }}
        />
        <span className={`dot ${useColorStatus("K91BC5_PCS")}`}>X</span>
        <span className={`dot ${useColorStatus("K91BC5")}`}>M</span>
      </div>
      <div className="hpipecircle position-absolute single-text-16">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K91BC4",
          }}
        />
        <span className={`dot ${useColorStatus("K91BC4_PCS")}`}>X</span>
        <span className={`dot ${useColorStatus("K91BC4")}`}>M</span>
      </div>
      <div className="hpipecircle position-absolute single-text-17">
        <span className="dot grey-color"></span>
        <span className={`dot ${useColorStatus("L91BC4_PCS_3&4")}`}>X</span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91BC4",
          }}
        />
        <span className={`dot ${useColorStatus("L91BC4_BDS")}`}>B</span>
        <span className={`dot ${useColorStatus("L91BC4_PCS_1&2")}`}>X</span>
        <span className={`dot ${useColorStatus("L91BC4")}`}>M</span>
      </div>
      <div className="hpipecircle position-absolute single-text-18">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K91MS1",
          }}
        />
        <span className={`dot ${useColorStatus("K91MS1")}`}>M</span>
      </div>
      <div className="hpipecircle position-absolute single-text-19">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91BRU1",
          }}
        />
        <span className={`dot ${useColorStatus("L91BRU1_PCS")}`}> X</span>
        <span className={`dot ${useColorStatus("L91BRU1")}`}> M</span>
      </div>
      <div className="squareplustri position-absolute single-text-20 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "W/FLYASH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "K91HP3",
          }}
        />
      </div>
      <div className="loadingtruck position-absolute single-text-21"></div>
      <div className="loadingtruck position-absolute single-text-22"></div>
      <div className="squareplustri position-absolute single-text-23 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark top",
            label: "K91BF1",
          }}
        />
        <span
          className={`square mt-4 ${useColorStatus("K91BF1_BF_SEQ")}`}
        ></span>
      </div>
      <div className="squareplustri position-absolute single-text-24 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark top",
            label: "L91BF3",
          }}
        />
        <span
          className={`square mt-4 ${useColorStatus("L91BF3_BF_SEQ")}`}
        ></span>
      </div>
      <div className="squareplustri position-absolute single-text-25 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark top",
            label: "L91BF1",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-27 text-center">
        <span className={`dot mt-2 ${useColorStatus("L91BRU1_BL")}`}>L</span>
      </div>
      <div className=" position-absolute single-text-28 text-center">
        <span className={`square ${useColorStatus("L91BRU1_SEL")}`}>S</span>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "L91BRU1_SEL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "(START/STOP)",
          }}
        />
      </div>
      <div
        className={`circle-img ${useFanImgTagsColorStatus(
          "K91RA3"
        )} position-absolute single-text-33`}
      >
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark left",
            label: "K91RA3",
          }}
        />
      </div>
      <div
        className={`circle-img ${useFanImgTagsColorStatus(
          "L91RA3"
        )} position-absolute single-text-34`}
      >
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark left",
            label: "L91RA3",
          }}
        />
      </div>
      <div className={`position-absolute single-text-35`}>
        <span className={`line-circle ${useColorStatus("K91FN1")}`}></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K91FN1",
          }}
        />
      </div>
      <div className={`position-absolute single-text-36`}>
        <span className={`line-circle grey-color`}></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91FN1",
          }}
        />
      </div>
      <TextColumn
        list={tagsdata.wanakboriMaterialTransportTextcolumn1}
        useClass={"position-absolute single-text-38"}
      />
      <TextColumn
        list={tagsdata.wanakboriMaterialTransportTextcolumn2}
        useClass={"position-absolute single-text-39"}
      />
      <TextColumn
        list={tagsdata.wanakboriMaterialTransportTextcolumn3}
        useClass={"position-absolute single-text-40"}
      />
      <TextColumn
        list={tagsdata.wanakboriMaterialTransportTextcolumn4}
        useClass={"position-absolute single-text-41"}
      />
      <BlackContainer
        data={{
          label: "K91BW1_FT01",
          useClass: "greenTxt mx-auto position-absolute single-text-411",
          unit: "t/h",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "L91BC4_IT01",
          useClass: "greenTxt mx-auto position-absolute single-text-42",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "K91BC2_IT01",
          useClass: "greenTxt mx-auto position-absolute single-text-43",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-44 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "K91DG1",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("K91DG1")}`}
        />
      </div>
      <div className="position-absolute single-text-45 d-flex">
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("L91DG1")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L91DG1",
          }}
        />
      </div>
      <div
        className={`dot ${useColorStatus(
          "K91DG1_CLOSE_LIMIT"
        )} position-absolute single-text-46`}
      >
        X
      </div>
      <div
        className={`dot ${useColorStatus(
          "K91DG1_OPEN_LIMIT"
        )} position-absolute single-text-47`}
      >
        X
      </div>
      <div className="position-absolute single-text-48 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "211IM 400",
          }}
        />
        <span className={`dot ${useColorStatus("L91CR1")}`}>X</span>
      </div>
      <div className={`position-absolute single-text-49`}>
        <span className={`line-circle ${useColorStatus("L91FN3")}`}></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91FN3",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-50",
          label: "L91BF1",
        }}
      />
    </div>
  );
};

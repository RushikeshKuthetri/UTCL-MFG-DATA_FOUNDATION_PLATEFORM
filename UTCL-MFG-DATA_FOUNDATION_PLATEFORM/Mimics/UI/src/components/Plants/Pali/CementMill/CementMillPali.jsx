import {
  TextContainerWithWrapWord,
  BlackContainer,
  TransparentBoxWithGate,
} from "../../../index";

export const CementMillPali = () => {
  return (
    <div className="Pali-Cement-Mill w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <table>
          <tr>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "CM_531WI1AI01",
                  useClass: "greenTxt mt-1",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "CM_531WI1AI02",
                  useClass: "greenTxt mt-1 ",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "CM_531WI1AI03",
                  useClass: "greenTxt mt-1",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "CM_531WI1AI04",
                  useClass: "greenTxt mt-1 ",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "CM_531WI1AI05",
                  useClass: "greenTxt mt-1",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "CM_531WF1_FR",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "CM_531WF2_FR",
                  useClass: "greenTxt mt-1 ",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "CM_531WF3_FR",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "CM_531WF4_FR",
                  useClass: "greenTxt mt-1 ",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "CM_K31FM1_FI",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>
      </div>
      <div className=" position-absolute single-text-2">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CM_561BE1_M01II_B",
              useClass: "greenTxt mb-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="pipe"></div>
      </div>
      <div className="hpipecircle position-absolute single-text-3"></div>
      <div className="hpipecircle position-absolute single-text-4"></div>
      <div className="containerImage position-absolute single-text-5 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Reject Bin",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "561-BI1",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-6 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Reject Bin",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "561B12",
          }}
        />
      </div>
      <div className=" position-absolute single-text-7 bigContainer text-center pt-4">
        <BlackContainer
          data={{
            label: "CM_561CM1_XT03",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561CM1_PT1_PT2",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561HT1_S01AI01",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561CM1_XT01",
            useClass: "greenTxt mt-3",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561CM1_XT04",
            useClass: "greenTxt mt-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-8 ">
        <BlackContainer
          data={{
            label: "CM_561MD1_JI",
            useClass: "greenTxt ml-5",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <div className="box-1 p-2 mt-4 d-flex">
          <BlackContainer
            data={{
              label: "CM_561HT1_PT14",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561HT1_PT25",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561HT1_PT36",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "CM_561CM1_PT2",
            useClass: "greenTxt mb-3 ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561WI1_FT",
            useClass: "greenTxt ",
            unit: "m/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CM_561BW1_FR",
          useClass: "greenTxt mt-2 position-absolute single-text-10",
          unit: "t/h",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-11 box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info",
            label: "Manual",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PV",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SR1_SI",
              useClass: "greenTxt mt-2 ml-3",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "OUT",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SR1_SPSPM",
              useClass: "greenTxt mt-2 ml-3",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-12 border p-2">
        <BlackContainer
          data={{
            label: "CM_MAT_FEED_GRP_FBAI01",
            useClass: "greenTxt ",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-13 position-absolute">
        <BlackContainer
          data={{
            label: "CM_561BF3_TT1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561BF3_PT03",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561CM1_PT3",
            useClass: "greenTxt mt-4",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561CM1_TT2",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 box-1 p-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PV",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561FN3_SI",
              useClass: "greenTxt mt-1 ml-3",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "OUT",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561FN3_SPSPM",
              useClass: "greenTxt mt-2 ml-3",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-15">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "591BE1",
            }}
          />
        </div>
        <div className="pipe"></div>
      </div>
      <div className="single-text-16 position-absolute">
        <BlackContainer
          data={{
            label: "CM_591BE1_M01II_B",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="chimni-red position-absolute single-text-17"></div>
      <div className="single-text-18 position-absolute">
        <BlackContainer
          data={{
            label: "CM_561FN3_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CMSS_HT_MFM9_TOT_ACT_PWR",
            useClass: "greenTxt mt-1",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-19 position-absolute">
        <BlackContainer
          data={{
            label: "CM_561CM1_TT1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561CM1_PT1",
            useClass: "greenTxt mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="single-text-20 position-absolute ">
        <div className="border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "Silo-1",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_591SBLI1_LT",
              useClass: "greenTxt",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_591SBLI2_LT",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_591SBLI3_LT",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "Silo-2",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_591SBLI4_LT",
              useClass: "greenTxt",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_591SBLI5_LT",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_591SBLI6_LT",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-21 squareplustri position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "561BF3",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561BF3_DPT03",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-22 position-absolute">
        <BlackContainer
          data={{
            label: "CM_561BF3_TT2",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561BF3_PT02",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-23 hpipecircle  position-absolute"></div>
      <div className="single-text-24  position-absolute">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{ squareClass: "grey-color" }}
        />
      </div>
      <div className="single-text-25 position-absolute d-flex">
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
      </div>
      <div className="single-text-26 position-absolute d-flex">
        <div className="hpipecircle"></div>
        <div className="hpipecircle"></div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "591AS1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "591AS2",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "591AS3",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "561BC1",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "531BC3",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "561SK1",
          }}
        />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Hr  position-absolute line-4"></div>
      <div className="yellowline-Hr  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Hr  rightarrow position-absolute line-8"></div>
      <div className="yellowline-Hr  leftarrow position-absolute line-9"></div>
      <div className="yellowline-Vr  position-absolute line-10"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-11"></div>
      <div className="yellowline-Vr  position-absolute line-12"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
    </div>
  );
};

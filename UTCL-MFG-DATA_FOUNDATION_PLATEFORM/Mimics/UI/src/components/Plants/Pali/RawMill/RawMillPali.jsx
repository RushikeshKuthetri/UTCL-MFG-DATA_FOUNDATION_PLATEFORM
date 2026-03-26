import { TextContainerWithWrapWord, BlackContainer } from "../../../index";
export const RawMillPali = () => {
  return (
    <div className="RawMillPali  w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <table>
          <tr>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "RM1_331WF1_FBAI01",
                  useClass: "greenTxt mt-1",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "RM1_331WF2_FBAI02",
                  useClass: "greenTxt mt-1 ",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "RM1_331WF3_FBAI03",
                  useClass: "greenTxt mt-1",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "RM1_331WF4_FBAI04",
                  useClass: "greenTxt mt-1 ",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "RM1_331WF5_FBAI05",
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
                  label: "RM1_331WF1_FR",
                  useClass: "greenTxt mt-1",
                  unit: "tph",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "RM1_331WF2_FR",
                  useClass: "greenTxt mt-1 ",
                  unit: "tph",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "RM1_331WF3_FR",
                  useClass: "greenTxt mt-1",
                  unit: "tph",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "RM1_331WF4_FR",
                  useClass: "greenTxt mt-1 ",
                  unit: "tph",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-2">
              <BlackContainer
                data={{
                  label: "RM1_331WF5_FR",
                  useClass: "greenTxt mt-1",
                  unit: "tph",
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
              label: "RM1_361BE1_M01II_B",
              useClass: "greenTxt mb-4  mr-5",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_331WF_TPH_TOT",
              useClass: "greenTxt mb-4 ml-5",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="pipe"></div>
      </div>
      <div className="hpipecircle position-absolute single-text-3 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "331BC3",
          }}
        />
      </div>
      <div className="hpipecircle position-absolute single-text-4 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "361FV1",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-5 pt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "361Bl1",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-6 pt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "361Bl2",
          }}
        />
      </div>
      <div className=" position-absolute single-text-7">
        <div className=" ml-5">
          <BlackContainer
            data={{
              label: "RM1_361RM1_PT3",
              useClass: "greenTxt ml-4",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "4N03HP_LT",
              useClass: "greenTxt mt-3 ml-4",
              unit: "degC15",
              unitColor: "unitColor",
            }}
          /> */}
        </div>

        <div className="bigContainer text-center pt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "361SR1",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361RM1_PT1_PT2",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HT1_S01AI01",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361RM1_XT03",
              useClass: "greenTxt mt-4",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361RM1_XT02",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361RM1_XT01",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className=" ml-5 mt-4">
          <BlackContainer
            data={{
              label: "RM1_361RM1_TT1",
              useClass: "greenTxt  ml-5",
              unit: "degC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361RM1_PT1",
              useClass: "greenTxt mt-3 ml-5",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-8 ">
        <BlackContainer
          data={{
            label: "RABH_HT_MFM4_TOT_ACT_PWR",
            useClass: "greenTxt ml-5",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <div className="box-1 p-2 mt-4">
          <BlackContainer
            data={{
              label: "RM1_361HT1_PT13",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HT1_PT24",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "RM1_361WI1_FT1",
          useClass: "greenTxt mt-2 position-absolute single-text-9",
          unit: "m³/h",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "RM1_361BW1_FR",
          useClass: "greenTxt mt-2 position-absolute single-text-10",
          unit: "tph",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-11 box-1  text-center p-1">
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
              label: "RM1_361SR1_SI",
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
              label: "RM1_361SR1_SPSPM",
              useClass: "greenTxt mt-2 ml-3",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div>
          <div className="yellowline-Vr  line-1"></div>
          <div className="squareplustri text-center pt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "361",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CN1",
              }}
            />
          </div>

          <div className="mt-1 ml-1 circle-img c-grey-img-2"></div>

          <div className="yellowline-Vr downArrow  line-2"></div>
        </div>
        <div className="ml-5">
          <div className="yellowline-Vr  line-1"></div>
          <div className="squareplustri text-center pt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "361",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CN2",
              }}
            />
          </div>
          <div className="mt-1 ml-1 circle-img c-grey-img-2"></div>
          <div className="yellowline-Vr downArrow  line-2"></div>
        </div>
        <div className="ml-5">
          <div className="yellowline-Vr  line-1"></div>
          <div className="squareplustri text-center pt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "361",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CN3",
              }}
            />
          </div>
          <div className="mt-1 ml-1 circle-img c-grey-img-2"></div>

          <div className="yellowline-Vr downArrow  line-2"></div>
        </div>
        <div className="ml-5">
          <div className="yellowline-Vr  line-1"></div>
          <div className="squareplustri text-center pt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "361",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CN4",
              }}
            />
          </div>
          <div className="mt-1 ml-1 circle-img c-grey-img-2"></div>

          <div className="yellowline-Vr downArrow  line-2"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-13 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "391AS1",
          }}
        />
        <div className="square grey-color ml-3"></div>
      </div>
      <div className=" position-absolute single-text-14 d-flex">
        <div className="square grey-color"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-3",
            label: "391AS2",
          }}
        />
      </div>
      <div className=" position-absolute single-text-15 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "391AS3",
          }}
        />
        <div className="square grey-color ml-3"></div>
      </div>
      <div className=" position-absolute single-text-16 text-center">
        <div className="square grey-color ml-3"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "391AS4",
          }}
        />
      </div>
      <div className="img-83 position-absolute single-text-17 pt-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BagHouse",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_421BF1_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="brick-cooler-img position-absolute single-text-18"></div>
      <div className="pipe  position-absolute single-text-19"></div>
      <div className=" position-absolute single-text-20 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "391AS5",
          }}
        />
        <div className="square grey-color ml-3"></div>
      </div>
      <div className=" position-absolute single-text-21 text-right">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "391RA5",
          }}
        />
        <div className="square grey-color ml-3"></div>
      </div>
      <div className="containerImage position-absolute single-text-22 text-center pt-2">
        <BlackContainer
          data={{
            label: "RM1_391SB1_LT",
            useClass: "greenTxt mt-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_CF_SILO_LVL_MT",
            useClass: "greenTxt mt-1",
            unit: "mt",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "RM1_391BE1_M01II_B",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_391BE1_M02II_B",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_391BE1_M01JI_B",
            useClass: "greenTxt mt-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_391BE1_M02JI_B",
            useClass: "greenTxt mt-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24 box-1 text-center p-1">
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
              label: "SP",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_421FN1_SPSPA",
              useClass: "greenTxt mt-2 ml-3",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PV",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_441FN1_PT02",
              useClass: "greenTxt mt-2 ml-3",
              unit: "mmwc",
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
              label: "PH_421FN1_SPSPM",
              useClass: "greenTxt mt-2 ml-3",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-25">
        <BlackContainer
          data={{
            label: "PH_421FN1_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_421FN1_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "RM1_361RM1_PT5",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361RM1_TT2",
            useClass: "greenTxt mt-5",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mt-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "RM1_361RM1_PT4",
          useClass: "greenTxt mt-1 position-absolute single-text-27",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-28 d-flex">
        <BlackContainer
          data={{
            label: "RM1_361CN1_PT01",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361CN2_PT02",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361CN3_PT03",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361CN4_PT04",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <div className="squareplustri text-center pt-3"> </div>
        <div className="mt-1 ml-1 circle-img c-grey-img-2"></div>
        <div className="yellowline-Vr downArrow  line-2"></div>
      </div>
      <BlackContainer
        data={{
          label: "RM1_RAWMILL_SP",
          useClass: "greenTxt mt-1 position-absolute single-text-30",
          unit: "kw/t",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "RM1_361RM1_PT6",
          useClass: "greenTxt mt-1 position-absolute single-text-31",
          unit: "mba",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-32 box-1  text-center p-1">
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
              label: "RM1_361LD2_ZT",
              useClass: "greenTxt mt-2 ml-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "RM1_361RM1_TT5",
            useClass: "greenTxt mt-2",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
        <div className=" box-1 p-1 mt-3 text-center">
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
                label: "RM1_361LD4_ZT",
                useClass: "greenTxt mt-2 ml-3",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-34 box-1 text-center p-1 mt-3">
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
              label: "RM1_361LD3_ZT",
              useClass: "greenTxt mt-2 ml-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 box-1 text-center p-1 mt-3">
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
              label: "RM1_361LD1_ZT",
              useClass: "greenTxt mt-2 ml-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="truck position-absolute single-text-36"></div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-37",
          label: "391RA1-4",
        }}
      />

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Hr  position-absolute line-4"></div>
      <div className="yellowline-Hr  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr  position-absolute line-7"></div>
      <div className="yellowline-Hr  leftarrow position-absolute line-8"></div>
      <div className="yellowline-Hr  leftarrow position-absolute line-9"></div>
      <div className="yellowline-Vr  position-absolute line-10"></div>
      <div className="yellowline-Hr  position-absolute line-11"></div>
      <div className="yellowline-Vr  position-absolute line-12"></div>
      <div className="yellowline-Vr  position-absolute line-13"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-14"></div>
      <div className="yellowline-Hr  position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr  position-absolute line-22"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-23"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
    </div>
  );
};

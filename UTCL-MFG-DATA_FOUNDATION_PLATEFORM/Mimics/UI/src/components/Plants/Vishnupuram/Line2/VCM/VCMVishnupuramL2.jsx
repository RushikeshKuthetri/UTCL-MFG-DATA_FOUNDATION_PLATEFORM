import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";

import {
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../../utils";

export const VCMVishnupuramL2 = () => {
  return (
    <div className="Vishnupuram-L2-VCM w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <table className="">
          <tr>
            <th>EX. FAN VIB</th>
            <th>
              <BlackContainer
                data={{
                  label: "VCM_M10_1_XI",
                  useClass: "greenTxt",
                  unit: "mm/s",
                  unitColor: "unitColor",
                }}
              />
            </th>
            <th>
              <BlackContainer
                data={{
                  label: "VCM_M10_2_XI",
                  useClass: "greenTxt",
                  unit: "mm/s",
                  unitColor: "unitColor",
                }}
              />
            </th>
            <th>
              <BlackContainer
                data={{
                  label: "VCM_M10_3_XI",
                  useClass: "greenTxt",
                  unit: "mm/s",
                  unitColor: "unitColor",
                }}
              />
            </th>
            <th>
              <BlackContainer
                data={{
                  label: "VCM_M10_5_XI",
                  useClass: "greenTxt",
                  unit: "mm/s",
                  unitColor: "unitColor",
                }}
              />
            </th>
            <th>
              <BlackContainer
                data={{
                  label: "VCM_M10_6_XI",
                  useClass: "greenTxt",
                  unit: "mm/s",
                  unitColor: "unitColor",
                }}
              />
            </th>
          </tr>

          <tr>
            <td>EX. FAN BRG</td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "VCM_M10_1_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "VCM_M10_2_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VCM_M10_3_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "VCM_M10_4_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
          </tr>
          <tr>
            <td>BH TEMP.</td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "VCM_M11_1_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "VCM_M11_2_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VCM_M11_3_TI",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              {" "}
              <BlackContainer
                data={{
                  label: "VCM_M11_4_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "VCM_M11_5_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VCM_M11_6_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VCM_M11_7_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "VCM_M11_8_TI",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="triangle-with-squares text-center">1</div>
        <div className="triangle-with-squares text-center">2</div>
        <div className="triangle-with-squares text-center">5</div>
        <div className="triangle-with-squares text-center">6</div>
        <div className="triangle-with-squares text-center">3</div>
        <div className="triangle-with-squares text-center">4</div>
        <div className="triangle-with-squares text-center">7</div>
        <div className="triangle-with-squares text-center">8</div>
      </div>
      <div className="position-absolute single-text-3 border p-1 text-center">
        <div className="text-center d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COMP-1 (ELGI1)",
            }}
          />
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-2 digital-tag ${useColorStatus("E0_64_M01")}`}
              label="E0_64_M01"
              text=""
            />
          </div>
        </div>
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COMP-2 (ATLAS)",
            }}
          />
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-2 digital-tag ${useColorStatus("E0_66_M01")}`}
              label="E0_66_M01"
              text=""
            />
          </div>
        </div>
        <div className="text-center d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COMP-3 (ELGI2)",
            }}
          />
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-2 digital-tag ${useColorStatus("E0_65_M01")}`}
              label="E0_65_M01"
              text=""
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4 bigContainer text-center pt-3">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("VCM_M03_02")}`}
          label="VCM_M03_02"
          text="X"
        />
        <BlackContainer
          data={{
            label: "VCM_M03_02_SY",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_02_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_02_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "VERTICAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "COAL MILL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "MILL DP",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_DP",
            useClass: "greenTxt mt-1",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_PI",
            useClass: "greenTxt mt-4 mr-3",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div className=" border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "R.LUB.PUMPS",
            }}
          />
          <div className="d-flex mt-1 justify-content-between">
            <div className="text-center">
              <div className="roller-drum d-flex justify-content-center align-items-center ">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("VCM_M05_01")}`}
                  label="VCM_M05_01"
                  text=""
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "1",
                }}
              />
              <BlackContainer
                data={{
                  label: "VCM_M05_1_TI",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="text-center ml-2">
              <div className="roller-drum d-flex justify-content-center align-items-center ">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("VCM_M05_02")}`}
                  label="VCM_M05_02"
                  text=""
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "2",
                }}
              />
              <BlackContainer
                data={{
                  label: "VCM_M05_2_TI",
                  useClass: "greenTxt mt-1",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className=" border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "R.TENSION PUMPS",
            }}
          />
          <div className="d-flex mt-1 justify-content-between">
            <div className="text-center">
              <div className="roller-drum d-flex justify-content-center align-items-center ">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("VCM_M07_01")}`}
                  label="VCM_M07_01"
                  text=""
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "1",
                }}
              />
              <BlackContainer
                data={{
                  label: "VCM_M07_PI",
                  useClass: "greenTxt mt-1",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="text-center">
              <div className="roller-drum d-flex justify-content-center align-items-center ">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("VCM_M07_02")}`}
                  label="VCM_M07_02"
                  text=""
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "2",
                }}
              />
            </div>
          </div>
        </div>
        <div className=" border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GB OIL PUMPS",
            }}
          />
          <div className="d-flex mt-1 justify-content-between">
            <div className="text-center">
              <div className="roller-drum d-flex justify-content-center align-items-center ">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("VCM_M06_01")}`}
                  label="VCM_M06_01"
                  text=""
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "LP",
                }}
              />
              <div className="roller-drum d-flex justify-content-center align-items-center ">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("VCM_M06_02")}`}
                  label="VCM_M06_02"
                  text=""
                />
              </div>
              <BlackContainer
                data={{
                  label: "VCM_M06_LP_PI",
                  useClass: "greenTxt mt-1",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="text-center">
              <div className="roller-drum d-flex justify-content-center align-items-center ">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("VCM_M06_03")}`}
                  label="VCM_M06_03"
                  text=""
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "HP",
                }}
              />
              <div className="roller-drum d-flex justify-content-center align-items-center ">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("VCM_M06_04")}`}
                  label="VCM_M06_04"
                  text=""
                />
              </div>
              <div className="d-flex mt-1 ml-1">
                <div>
                  <MotorCircleDigitalTag
                    className={`dot p-1 digital-tag ${useColorStatus(
                      "VCM_RGL_PS_N"
                    )}`}
                    label="VCM_RGL_PS_N"
                    text=""
                  />
                </div>
                <div className="ml-2">
                  <MotorCircleDigitalTag
                    className={`dot p-1 digital-tag ${useColorStatus(
                      "VCM_RGL_PS_L"
                    )}`}
                    label="VCM_RGL_PS_L"
                    text=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "VCM_M14_02_L",
              useClass: "greenTxt mt-2",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PC BIN",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "VCM_M14_01_L",
              useClass: "greenTxt mt-2",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "KC BIN",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div className="text-center">
          <div className="containerImage ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-3",
                label: "CYCLONE 1",
              }}
            />
            <BlackContainer
              data={{
                label: "VCM_M09_2_TI",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "VCM_M09_1"
            )}`}
            label="VCM_M09_1"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "VCM_M09_2"
            )}`}
            label="VCM_M09_2"
          />
        </div>
        <div className="text-center">
          <div className="containerImage ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-3",
                label: "CYCLONE 2",
              }}
            />
            <BlackContainer
              data={{
                label: "VCM_M09_1_TI",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "VCM_M09_3"
            )}`}
            label="VCM_M09_3"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "VCM_M09_4"
            )}`}
            label="VCM_M09_4"
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COAL MILL 2",
            }}
          />
          <div className="containerImage ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-3",
                label: "RCH 2",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("C2_53_M01")}`}
            label="C2_53_M01"
            text=""
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "VCM",
            }}
          />
          <div className="containerImage ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-3",
                label: "RCH 3",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("VCM_M23_01")}`}
            label="VCM_M23_01"
            text=""
          />
          <div className="roller-drum mt-1 d-flex justify-content-center align-items-center ">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("VCM_TF_SV")}`}
              label="VCM_TF_SV"
              text=""
            />
          </div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{
          useClass: "text-dark ml-auto text-center",
          label: "VCM_M22_03_N",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
            "VCM_M22_03"
          )}`,
          secondCircleLabel: "VCM_M22_03",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{
          useClass: "text-dark ml-auto text-center",
          label: "VCM_M02_02_N",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
            "VCM_M02_02"
          )}`,
          secondCircleLabel: "VCM_M02_02",
        }}
      />
      <div className="single-text-11 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M13_01")}`}
          label="VCM_M13_01"
        />
        <div className="d-flex justify-content-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "60T",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M13_01_II",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-12 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M13_02")}`}
          label="VCM_M13_02"
        />
        <div className="d-flex  mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "60T",
            }}
          />
          <BlackContainer
            data={{
              label: "VCM_M13_02_II",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-13 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M26_01")}`}
          label="VCM_M26_01"
        />
        <BlackContainer
          data={{
            label: "VCM_M26_01_II",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-14 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M02")}`}
          label="VCM_M02"
        />
        <div className="d-flex  mt-1">
          <BlackContainer
            data={{
              label: "VCM_M02_II",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-15 position-absolute d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-1",
              label: "1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M11_03")}`}
            label="VCM_M11_03"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-1",
              label: "3",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M11_02")}`}
            label="VCM_M11_02"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-1",
              label: "5",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M11_08")}`}
            label="VCM_M11_08"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-1",
              label: "7",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M11_07")}`}
            label="VCM_M11_07"
          />
        </div>
      </div>
      <div className="single-text-16 position-absolute d-flex">
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-1",
              label: "2",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M11_06")}`}
            label="VCM_M11_06"
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-1",
              label: "4",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M11_05")}`}
            label="VCM_M11_05"
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-1",
              label: "6",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M11_10")}`}
            label="VCM_M11_10"
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pr-1",
              label: "8",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M11_09")}`}
            label="VCM_M11_09"
          />
        </div>
      </div>
      <div className="single-text-17 position-absolute d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "VCM_M11_11"
            )}`}
            label="VCM_M11_11"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pl-1",
              label: "4",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "VCM_M11_12"
            )}`}
            label="VCM_M11_12"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pl-1",
              label: "2",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "VCM_M11_13"
            )}`}
            label="VCM_M11_13"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pl-1",
              label: "3",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "VCM_M11_14"
            )}`}
            label="VCM_M11_14"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pl-1",
              label: "1",
            }}
          />
        </div>
      </div>
      <div className="single-text-18 position-absolute d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M11_15")}`}
            label="VCM_M11_15"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pL-1",
              label: "10T",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M11_01")}`}
            label="VCM_M11_01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pL-1",
              label: "10T",
            }}
          />
        </div>
      </div>
      <div className="single-text-19 position-absolute d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M14_02")}`}
            label="VCM_M14_02"
          />
          <div className="d-flex  mt-1">
            <BlackContainer
              data={{
                label: "VCM_M14_02_II",
                useClass: "greenTxt mr-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-2 digital-tag ${useColorStatus(
                "VCM_PC_BIN_LS"
              )}`}
              label="VCM_PC_BIN_LS"
              text=""
            />
          </div>
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M14_01")}`}
            label="VCM_M14_01"
          />
          <div className="d-flex  mt-1">
            <BlackContainer
              data={{
                label: "VCM_M14_01_II",
                useClass: "greenTxt mr-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot p-2 digital-tag ${useColorStatus(
                "VCM_KC_BIN_LS"
              )}`}
              label="VCM_KC_BIN_LS"
              text=""
            />
          </div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{
          useClass: "text-dark ml-auto text-center",
          label: "VCM_M17_05_N",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto digital-tag ${useColorStatus(
            "VCM_M17_05"
          )}`,
          secondCircleLabel: "VCM_M17_05",
        }}
      />
      <div className="position-absolute single-text-21 box-1 d-flex justify-content-center align-items-center bg-secondary">
        <BlackContainer
          data={{
            label: "VCM_M11_1_PI",
            useClass: "greenTxt mr-2",
            unit: "kg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M11_DP",
            useClass: "greenTxt ",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-22 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "VCM_M06_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_1_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_2_TI",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-23 position-absolute d-flex">
        <div className="roller-drum d-flex justify-content-center align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("VCM_RB_SV")}`}
            label="VCM_RB_SV"
            text=""
          />
        </div>
      </div>
      <div className="single-text-24 position-absolute text-center containerImage pt-2">
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("VCM_RH_LS")}`}
          label="VCM_RH_LS"
          text=""
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "REJECT HOPPER",
          }}
        />
      </div>
      <div className="single-text-25 position-absolute truck"></div>
      <div className="single-text-26 position-absolute">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "VCM_SH_LI",
              useClass: "greenTxt mt-3",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-27 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "VCM_M03_XI",
            useClass: "greenTxt mt-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M03_01_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-28 position-absolute ">
        <BlackContainer
          data={{
            label: "VCM_M11_2_PI",
            useClass: "greenTxt mb-4 ml-2",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <div className="roller-drum d-flex justify-content-center align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("VCM_M10_03")}`}
            label="VCM_M10_03"
            text=""
          />
        </div>
        <div className="roller-drum mt-2 d-flex justify-content-center align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("VCM_M10_02")}`}
            label="VCM_M10_02"
            text=""
          />
        </div>
      </div>
      <div className="single-text-29 position-absolute ">
        <BlackContainer
          data={{
            label: "VCM_M09_3_TI",
            useClass: "greenTxt mb-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M09_1_DP",
            useClass: "greenTxt ",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-30 position-absolute ">
        <BlackContainer
          data={{
            label: "VCM_M10_PI",
            useClass: "greenTxt ",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M19_01_ZI",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square mt-2 digital-tag ${useColorStatus("VCM_M19_01")}`}
          label="VCM_M19_01"
        />
      </div>
      <div className="single-text-31 position-absolute d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M17_01")}`}
            label="VCM_M17_01"
          />
          <BlackContainer
            data={{
              label: "VCM_M17_01_ZI",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "VCM_M03_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-32 position-absolute ">
        <BlackContainer
          data={{
            label: "VCM_M18_01_ZI",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M18_01")}`}
          label="VCM_M18_01"
        />
      </div>
      <div className="single-text-33 position-absolute">
        <BlackContainer
          data={{
            label: "VCM_M20_3_TI",
            useClass: "greenTxt mb-1 ml-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M20_01")}`}
          label="VCM_M20_01"
        />
        <BlackContainer
          data={{
            label: "VCM_M20_01_ZI",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-34 position-absolute connector-icon">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("VCM_M12_01")}`}
          label="VCM_M12_01"
          text=""
        />
      </div>
      <div className="single-text-35 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "VCM_M20_1_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "DE",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "VCM_M20_2_TI",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "NDE",
            }}
          />
        </div>
      </div>
      <div className="single-text-36 position-absolute connector-icon">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("VCM_M10")}`}
          label="VCM_M10"
          text=""
        />
      </div>
      <div className="single-text-37 position-absolute connector-icon">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("VCM_M24")}`}
          label="VCM_M24"
          text=""
        />
      </div>
      <div className="single-text-38 position-absolute text-center">
        <BlackContainer
          data={{
            label: "VCM_M24_02_ZI",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M24_02")}`}
          label="VCM_M24_02"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "BF I/L DAMP",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark single-text-39 position-absolute",
          label: "FROM GCT I/L",
        }}
      />
      <div className="single-text-40 position-absolute d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "W.S VALVE",
            }}
          />
          <div className="roller-drum d-flex justify-content-center align-items-center ">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "VCM_47_BELT_WS_SV"
              )}`}
              label="VCM_47_BELT_WS_SV"
              text=""
            />
          </div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "MAG. SEP",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("VCM_M22_01")}`}
            label="VCM_M22_01"
            text=""
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "MENTAL DETECTOR",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("VCM_M22_02_EH")}`}
            label="VCM_M22_02_EH"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "VCM_M22_03_II",
          useClass: "greenTxt single-text-41 position-absolute",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "VCM_M23_01_II",
          useClass: "greenTxt single-text-42 position-absolute",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-43 position-absolute text-center">
        <BlackContainer
          data={{
            label: "VCM_M02_SY",
            useClass: "greenTxt mb-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M02_SI",
            useClass: "greenTxt mb-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "MILL PID",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item mt-1 justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret digital-tag ${useCaretColorStatus(
            "VCM_M03_DP_PID"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret digital-tag ${useCaretColorStatus(
            "VCM_M03_DP_PID"
          )}`}
          label="VCM_M03_DP_PID"
        />
      </div>
      <BlackContainer
        data={{
          label: "VCM_HA_CY_PI",
          useClass: "greenTxt single-text-44 position-absolute",
          unit: "mmwg",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-45 position-absolute text-center">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "VCM_M24_LRS_OPEN"
            )}`}
            label="VCM_M24_LRS_OPEN"
            text="O"
          />
          <MotorCircleDigitalTag
            className={`square ml-3 digital-tag ${useColorStatus(
              "VCM_M24_LRS_CLOSE"
            )}`}
            label="VCM_M24_LRS_CLOSE"
            text="C"
          />
        </div>
        <BlackContainer
          data={{
            label: "VCM_M24_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-46 position-absolute text-center">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "VCM_M10_GRR_RES_MAX"
            )}`}
            label="VCM_M10_GRR_RES_MAX"
            text="O"
          />
          <MotorCircleDigitalTag
            className={`square ml-3 digital-tag ${useColorStatus(
              "VCM_M10_GRR_RES_MIN"
            )}`}
            label="VCM_M10_GRR_RES_MIN"
            text="C"
          />
        </div>
        <BlackContainer
          data={{
            label: "VCM_M10_01_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-47 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("VCM_47_BELT_LS")}`}
          label="VCM_47_BELT_LS"
          text=""
        />
      </div>
      <div className="position-absolute single-text-48 chimni-red"></div>
      <BlackContainer
        data={{
          label: "VCM_M12_II",
          useClass: "greenTxt single-text-49 position-absolute",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-50 position-absolute text-center">
        <div className="roller-drum d-flex justify-content-center align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("VCM_M03")}`}
            label="VCM_M03"
            text=""
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "VCM_M03_LRS_OPEN"
            )}`}
            label="VCM_M03_LRS_OPEN"
            text="O"
          />
          <MotorCircleDigitalTag
            className={`square ml-4 digital-tag ${useColorStatus(
              "VCM_M03_LRS_CLOSE"
            )}`}
            label="VCM_M03_LRS_CLOSE"
            text="C"
          />
        </div>
      </div>
      <div className="single-text-51 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CPP MW",
          }}
        />
        <BlackContainer
          data={{
            label: "CPP_MW",
            useClass: "greenTxt mt-1",
            unit: "MW",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3 mt-3",
            label: "VF DAMP",
          }}
        />
      </div>
      <div className="single-text-52 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KILN COAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PUMPING RAL",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
            "VCM_M14_03"
          )}`}
          label="VCM_M14_03"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 mr-3",
            label: "COAL PUMPING",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-3",
            label: "TO KILN 1",
          }}
        />
      </div>
      <div className="single-text-53 position-absolute text-center">
        <div className=" squareplustri"></div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "VCM_M15_01"
          )}`}
          label="VCM_M15_01"
        />
      </div>
      <div className="single-text-54 position-absolute connector-icon">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("VCM_M15_02")}`}
          label="VCM_M15_02"
          text=""
        />
      </div>
      <div className="single-text-55 position-absolute text-center">
        <BlackContainer
          data={{
            label: "VCM_M14_03_SY",
            useClass: "greenTxt mb-1",
            unit: "SET",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VCM_M14_03_SI",
            useClass: "greenTxt mb-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-56 position-absolute">
      <BlackContainer
          data={{
            label: "C2_53_SI",
            useClass: "greenTxt mb-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-57 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-1 digital-tag ${useColorStatus("VCM_M11_04")}`}
          label="VCM_M11_04"
          text=""
        />
      </div>
      <div className="single-text-58 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("VCM_M15_TIMER")}`}
          label="VCM_M15_TIMER"
        />
      </div>

      <div className="pipe-1 pipeHr position-absolute"></div>
      <div className="pipe-2 pipeHr position-absolute"></div>
      <div className="pipe-3 pipeVr position-absolute"></div>
      <div className="pipe-4 pipeHr position-absolute"></div>
      <div className="pipe-5 pipeVr position-absolute"></div>
      <div className="pipe-6 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-7 pipeVr position-absolute"></div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
    </div>
  );
};

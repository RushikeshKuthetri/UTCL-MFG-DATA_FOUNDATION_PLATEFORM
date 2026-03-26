import { useDispatch } from "react-redux";
import * as tagsdata from "../../../data/rajshree/Cooler/rajshreeCoolerTextColumn";
import {
  BlackContainer,
  SingleText,
  TextColumn,
  TopLeftBox,
  TextContainerWithWrapWord,
} from "../../index";

export const CoolerRajshree = () => {
  const dispatch = useDispatch();
  return (
    <div className="CoolerRajshree w-100 h-100 position-relative">
      <div className="triangle-with-squares position-absolute single-text-1"></div>
      <div className="triangle-with-squares position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute pipe-1 gray",
            label: "LMD1CL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute pipe-2 gray",
            label: "LMD2OL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute pipe-3 gray",
            label: "LMD3OL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute pipe-4 gray",
            label: "LMD4OL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute pipe-5 gray",
            label: "LMD5OL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute pipe-6 gray",
            label: "LMD6OL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute pipe-7 gray",
            label: "LMD7OL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute pipe-8 gray",
            label: "LMD8OL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute pipe-9 gray",
            label: "LMD9OL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute pipe-10 gray",
            label: "LMDAOL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black position-absolute pipe-11 ",
            label: "1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black position-absolute pipe-12 ",
            label: "2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black position-absolute pipe-13 ",
            label: "3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black position-absolute pipe-14 ",
            label: "4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black position-absolute pipe-15 ",
            label: "5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black position-absolute pipe-16 ",
            label: "6",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black position-absolute pipe-17 ",
            label: "7",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black position-absolute pipe-18 ",
            label: "8",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black position-absolute pipe-19 ",
            label: "9",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-black position-absolute pipe-20 ",
            label: "10",
          }}
        />
      </div>
      {/* table */}
      <div className="position-absolute single-text-3">
        <table className="tab ">
          <tr className="border p-1 text-white">
            <td className="border p-1 text-white" colspan="2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white ",
                  label: " Grate Plate TEMP",
                }}
              />
            </td>
            <td className="border p-1 text-white">L</td>
            <td className="border p-1 text-white">C</td>
            <td className="border p-1 text-white">R</td>
          </tr>
          <tr className="border p-1 text-white">
            <td className="border p-1 text-white" rowspan="2">
              <span> Fan 1&2</span>
            </td>
            <td className="border p-1 text-white">ROW 3</td>
            <td className="border p-1 text-white">&ensp;</td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1_TEA1",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-1 text-white">&ensp;</td>
          </tr>
          <tr className="border p-1 text-white">
            <td className="border p-1 text-white">ROW 4</td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1TEA3",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-1 text-white">&ensp;</td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IKN1_TEA2",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr className="border p-1 text-white">
            <td className="border p-1 text-white">Fan 3&24</td>
            <td className="border p-1 text-white">ROW 5</td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1_TEA6",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1_TEA5",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1_TEA4",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr className="border p-1 text-white">
            <td className="border p-1 text-white" rowspan="2">
              FAN 5
            </td>
            <td className="border p-1 text-white">ROW 13</td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1_TEA8",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-1 text-white">&ensp;</td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1_TEA11",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr className="border p-1 text-white">
            <td className="border p-1 text-white">ROW 20</td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1_TEA13",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-1 text-white">&ensp;</td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1_TEA14",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr className="border p-1 text-white">
            <td className="border p-1 text-white">Fan 6</td>
            <td className="border p-1 text-white">ROW 5</td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1_TEA15",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td className="border p-1 text-white">&ensp;</td>
            <td className="border p-1 text-white">
              <BlackContainer
                data={{
                  label: "CL_474IN1_TEA16",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>
      </div>
      {/* table second */}
      <div className="position-absolute single-text-4 border gray p-1">
        <div className="d-flex gap">
          <div className="d-flex align-items-center gap">
            <span>Fine Tuning</span>
            <span className="bg-danger squre "></span>
          </div>
          <div className="d-flex align-items-center gap">
            <span>Load Control</span>
            <span className="bg-danger squre"></span>
          </div>
        </div>

        <div className="d-flex gap">
          <div className="d-flex align-items-center gap">
            <span>Kiln Feed SetPoint</span>
            <span className=" ">
              <BlackContainer
                data={{
                  label: "KL_484BI2_WI_P",
                  useClass: "greenTxt mt-1",
                  unit: "T",
                  unitColor: "unitColor",
                }}
              />
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center gap">
          <span>Kiln Feed Actual</span>
          <span className="">
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt mt-1",
                unit: "T",
                unitColor: "unitColor",
              }}
            />
          </span>
        </div>
        <div className="d-flex align-items-center gap">
          <span>Kiln Speed Actual</span>
          <span className="">
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt mt-1",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </span>
        </div>
        <div className="d-flex align-items-center gap">
          <span>Hyd. Press Set Point</span>
          <span className="">
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </span>
        </div>
      </div>
      {/* 123 list*/}
      <div className="position-absolute single-text-5">
        <div className="list-10 d-flex gray">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
      </div>
      <div className="yellowline-Hr  position-absolute pipe-22"></div>
      <div className="yellowline-Hr  position-absolute pipe-23"></div>
      <div className="circle-group p-2  pipe-24">
        <span className="grayDot">X</span>
      </div>
      <div className="position-absolute single-text-88">
        <span className="height-div gary"></span>
      </div>
      <div className="width-fit-content position-absolute pipe-25">
        <div className="circle-group p-1 ">
          <span className="greenDot p-2 ">M</span>
        </div>
      </div>
      <div className="circle-group p-2  pipe-26">
        <span className="grayDot">X</span>
      </div>
      <div className="width-fit-content position-absolute pipe-27">
        <div className="circle-group p-1 ">
          <span className="greenDot p-2 ">M</span>
        </div>
      </div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-33"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-39"></div>
      {/* <div className="yellowline-Vr downArrow position-absolute pipe-40"></div> */}
      <div className="yellowline-Vr downArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-44"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-45"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-46"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-47"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-48"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-49"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-50"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-51"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-52"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-53"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-54"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-55"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-56"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-57"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-58"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-59"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-60"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-61"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-62"></div>
      <div className="yellowline-Hr   position-absolute pipe-63"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-64"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-65"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-66"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-67"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-68"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-69"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-70"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-71"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-72"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-73"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-74"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-75"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-76"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-77"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-78"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-79"></div>

      <div className="connector-both-side position-absolute single-text-6">
        <div className="circle-group box ">
          <span className="green-line-circle p-2 "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-7">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-8">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-9">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-10">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-11">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-12">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-13">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-14">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-15">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-16">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-17">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-18">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-19">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-20",
          label: "474FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-21",
          label: "474FN2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-22",
          label: "474FN3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-23",
          label: "474FN4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-24",
          label: "474FN5",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-25",
          label: "474FN6",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-26",
          label: "474FN7",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-27",
          label: "474FN8",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-28",
          label: "474FN9",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-29",
          label: "474FNA",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-30",
          label: "474FNB",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-31",
          label: "474FNC",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-32",
          label: "474FND",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-33",
          label: "474FNE",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-34",
          label: "Flow",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-35",
          label: "Pressure",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-36",
          label: "Current",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-37",
          label: "Power",
        }}
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn1}
        useClass="position-absolute single-text-38"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn2}
        useClass="position-absolute single-text-39"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn3}
        useClass="position-absolute single-text-40"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn4}
        useClass="position-absolute single-text-51"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn5}
        useClass="position-absolute single-text-41"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn6}
        useClass="position-absolute single-text-42"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn7}
        useClass="position-absolute single-text-43"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn8}
        useClass="position-absolute single-text-44"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn9}
        useClass="position-absolute single-text-45"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn10}
        useClass="position-absolute single-text-46"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn11}
        useClass="position-absolute single-text-47"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn12}
        useClass="position-absolute single-text-48"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn13}
        useClass="position-absolute single-text-49"
      />
      <TextColumn
        list={tagsdata.rajshreeCoolarBottom1TextColumn14}
        useClass="position-absolute single-text-50"
      />
    
      <div className=" position-absolute single-text-52">
        <div className="d-flex gap gapp">
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn1}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn2}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn3}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn4}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn5}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn6}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn7}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn8}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn9}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn10}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn11}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn12}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn13}
        useClass=""
        />
        <TextColumn
        list={tagsdata.rajshreeCoolarBottom2TextColumn14}
        useClass=""
        />
         
        </div>
      </div>
      {/* <button className="d-block btn greenbtn position-absolute single-text-53">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-54">
        Temp
      </button>

      <button className="d-block btn greenbtn position-absolute single-text-55">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-56">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-57">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-58">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-59">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-60">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-61">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-62">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-63">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-64">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-65">
        Temp
      </button>
      <button className="d-block btn greenbtn position-absolute single-text-79">
        Temp
      </button> */}
      <div className="position-absolute single-text-66  gray grate-box">
        <div className="d-flex gap p-2 align-self-center text-white justify-content-center">
          <span>Grate Drive Available</span>
          <span className="squre bg-success "></span>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-67",
          label: "Hyd Pump 1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-68",
          label: "Hyd Pump 2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-69",
          label: "Hyd Pump 3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-70",
          label: "OC Pump",
        }}
      />
      <div className="position-absolute single-text-71">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ",
            label: "CL Blaster's",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ",
            label: "Air Pressure",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-72",
          label: "Cooler SP. Flow",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-73",
          label: "Cooler SP. KW",
        }}
      />
      <div className="position-absolute single-text-74">
        <div className="circle-group p-1">
          <span className="greenDot"></span>
        </div>
      </div>
      <div className="position-absolute single-text-75">
        <div className="circle-group p-1">
          <span className="greenDot"></span>
        </div>
      </div>
      <div className="position-absolute single-text-76">
        <div className="circle-group p-1">
          <span className="greenDot"></span>
        </div>
      </div>
      <div className="position-absolute single-text-77">
        <div className="circle-group p-1">
          <span className="greenDot"></span>
        </div>
      </div>
      <div className="position-absolute single-text-78 p-1">
        <span className="squre bg-success green d-flex "></span>
      </div>
      <TextColumn
        list={tagsdata.rajshreeCoolarTextColumn1}
        useClass=""
      />
     
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt mt-1 position-absolute single-text-84",
          unit: "mmWc",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt mt-1 position-absolute single-text-85",
          unit: "Nm3/Kgcl",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt mt-1 position-absolute single-text-86",
          unit: "KW/Ton",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt mt-1 position-absolute single-text-87",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_474IN1_TEA7",
          useClass: "greenTxt position-absolute single-text-89",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_474IN1_TEA9",
          useClass: "greenTxt position-absolute single-text-90",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-91">
        <div className="d-flex gap justify-content-end p-1">
          <span>
            <BlackContainer
              data={{
                label: "CL_474IN1_TEA10",
                useClass: "greenTxt ",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </span>
          <span>
            <BlackContainer
              data={{
                label: "CL_474IN1_TEA12",
                useClass: "greenTxt ",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </span>
        </div>

        <div className="d-flex gap align-self-center text-white p-1">
          <span>CH1 LVL</span>
          <span className="squre bg-success "></span>
          <span>
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt ",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </span>
          <span>CH2 LVL</span>
          <span className="squre bg-success "></span>
          <span>
            <BlackContainer
              data={{
                label: "CL_474CH2_TTP1",
                useClass: "greenTxt ",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </span>
        </div>
        <TopLeftBox
        parentDivClass=""
        useClass="d-flex gap p-1"
        list={tagsdata.rajshreeCoolarTopLeftBox1}
        headText={{ class: "", text: "" }}
      />
        
      </div>
      <div className="position-absolute single-text-92 p-1">
        <div className="d-flex gap p-1">
          <span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white ",
                label: "Grate Speed SetPoint Local",
              }}
            />
          </span>
          <span>
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt ",
                unit: "Spm",
                unitColor: "unitColor",
              }}
            />
          </span>
        </div>
        <div className="d-flex gap p-1">
          <span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white ",
                label: "Grate Speed SetPoint",
              }}
            />
          </span>
          <span>
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt ",
                unit: "Spm",
                unitColor: "unitColor",
              }}
            />
          </span>
        </div>
      </div>
      <div className="position-absolute single-text-93">
        <div className="d-flex gap align-self-center text-white p-1 justify-content-between">
          <span>Grate Speed Actual</span>

          <span>
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt ",
                unit: "Spm",
                unitColor: "unitColor",
              }}
            />
          </span>
          <span>Cyl-1 Piston Pr</span>

          <span>
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt ",
                unit: "Bar",
                unitColor: "unitColor",
              }}
            />
          </span>
        </div>
        <div className="d-flex gap p-1 justify-content-between">
          <span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white ",
                label: "Oil Level",
              }}
            />
          </span>
          <span>
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt ",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </span>
          <span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white ",
                label: "Cyl-2 Piston Pr",
              }}
            />
          </span>
          <span>
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt ",
                unit: "Bar",
                unitColor: "unitColor",
              }}
            />
          </span>
        </div>
        <div className="d-flex gap p-1 justify-content-between">
          <span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white ",
                label: "Oil Temperature",
              }}
            />
          </span>
          <span>
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt ",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </span>
          <span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white ",
                label: "Cyl-1 Rod Side Pr",
              }}
            />
          </span>
          <span>
            <BlackContainer
              data={{
                label: "KL_484BI2_WI_P",
                useClass: "greenTxt ",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </span>
        </div>
        <div className="d-flex gap p-1 justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ",
              label: "Cyl-2 Rod Side Pr",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_484BI2_WI_P",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="fiveside-shape position-absolute single-text-94"></div>
      <div className="width-fit-content position-absolute single-text-95">
        <div className="circle-group p-1 ">
          <span className="greenDot p-3 ">M</span>
        </div>
      </div>
      <div className="width-fit-content position-absolute single-text-96">
        <div className="circle-group p-1 ">
          <span className="greenDot p-3 ">M</span>
        </div>
      </div>
      <div className="width-fit-content position-absolute single-text-97">
        <div className="circle-group p-1 ">
          <span className="greenDot p-3 ">M</span>
        </div>
      </div>
      <div className="width-fit-content position-absolute single-text-98">
        <div className="circle-group p-1 ">
          <span className="greenDot p-3 ">M</span>
        </div>
      </div>
      <div className="width-fit-content position-absolute single-text-99">
        <div className="circle-group p-1 ">
          <span className="greenDot p-3 ">M</span>
        </div>
      </div>
      <div className="width-fit-content position-absolute single-text-100">
        <div className="circle-group p-1 ">
          <span className="greenDot p-3 ">M</span>
        </div>
      </div>
      <div className="width-fit-content position-absolute single-text-101">
        <div className="circle-group p-1  ">
          <span className="greenDot p-3 gray">M</span>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-black position-absolute single-text-102",
          label: "ROLLER CRUSHER",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute single-text-103",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute single-text-104",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute single-text-105",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute single-text-106",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute single-text-107",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute single-text-108",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="pipeVr position-absolute pipe-80"></div>
      <div className="pipeHr position-absolute pipe-81"></div>
      <div className="pipeVr position-absolute pipe-82"></div>
      <div className="pipeHr position-absolute pipe-83"></div>
      <div className="pipeVr position-absolute pipe-84"></div>
      <div className="pipeHr position-absolute pipe-85"></div>
      <div className="pipeVr position-absolute pipe-86"></div>
      <div className="pipeHr position-absolute pipe-87"></div>
      <div className="pipeHr position-absolute pipe-90"></div>
      <div className="pipeHr position-absolute pipe-91"></div>
      <div className="asset-72 position-absolute pipe-88"></div>
      <div className="connector-both-side position-absolute pipe-89">
        <div className="circle-group box ">
          <span className="green-line-circle "></span>
          <span className="c-text"> c </span>
          <span className="e-text"> E </span>
        </div>
      </div>
      <div className="chimni-red position-absolute pipe-92"></div>
      <div className="middle-sqr-container position-absolute pipe-93"></div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute pipe-94",
          label: "WHRS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-black position-absolute pipe-95",
          label: "AQC",
        }}
      />
      <div className="pipeHr position-absolute pipe-96"></div>
      <div className="pipeHr position-absolute pipe-97"></div>
      <div className=" position-absolute pipe-98">
        <span className="chart-box"></span>
      </div>
      <div className=" position-absolute pipe-99">
        <span className="chart-box"></span>
      </div>
      <div className="pipeHr position-absolute pipe-100"></div>
      <div className="pipeHr position-absolute pipe-101"></div>
      <div className="pipeHr position-absolute pipe-102"></div>
      <div className="pipeHr position-absolute pipe-103"></div>
      <div className="position-absolute pipe-104">
        <div className="circle-group p-1">
          <span className="greenDot gray"></span>
        </div>
      </div>
      <div className="position-absolute pipe-105">
        <div className="circle-group p-1">
          <span className="greenDot gray"></span>
        </div>
      </div>
      <div className="position-absolute pipe-106">
        <div className="circle-group p-1">
          <span className="greenDot gray"></span>
        </div>
      </div>
      <div className="position-absolute pipe-107">
        <div className="circle-group p-1">
          <span className="greenDot gray"></span>
        </div>
      </div>
      <div className="position-absolute pipe-108">
        <div className="circle-group p-1">
          <span className="greenDot gray"></span>
        </div>
      </div>
      <div className="position-absolute pipe-109">
        <div className="circle-group p-1">
          <span className="greenDot gray">M</span>
        </div>
      </div>
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-110",
          unit: "MW",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-111",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-112",
          unit: "mmWg",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-113",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-114",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-115",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-116",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-117",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-118",
          unit: "mmWg",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-119",
          unit: "mmWg",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-120",
          unit: "mmWg",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-121",
          unit: "mmWg",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-122",
          unit: "mmWg",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-123",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BI2_WI_P",
          useClass: "greenTxt position-absolute pipe-124",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-black position-absolute pipe-125",
          label: "UNBURNT BILO",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-black position-absolute pipe-126",
          label: "CLINKER SILO",
        }}
      />
      <div className="position-absolute pipe-127">
        <div className="circle-group p-1">
          <span className="greenDot gray">M</span>
        </div>
      </div>
      <div className="position-absolute pipe-128">
        <div className="circle-group p-1">
          <span className="greenDot gray">M</span>
        </div>
      </div>
      <div className="position-absolute pipe-129">
        <div className="circle-group p-1">
          <span className="greenDot gray">M</span>
        </div>
      </div>
      <div className="position-absolute pipe-130">
        <div className="circle-group p-1">
          <span className="greenDot gray">M</span>
        </div>
      </div>
      <div className="position-absolute pipe-131">
        <div className="circle-group p-1">
          <span className="greenDot gray">M</span>
        </div>
      </div>
      <div className="position-absolute pipe-132">
        <div className="circle-group p-1">
          <span className="greenDot gray"></span>
        </div>
      </div>
      <div className="yellowline-Vr downArrow position-absolute pipe-133"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-134"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-135"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-136"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-137"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-138"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-139"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-140"></div>
    </div>
  );
};

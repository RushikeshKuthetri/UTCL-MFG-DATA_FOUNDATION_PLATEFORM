import { useDispatch } from "react-redux";
import {
  BlackContainer,
  SingleText,
  TextColumn,
  TextContainerWithWrapWord,
} from "../../index";
import * as tagsData from "../../../data/rajshree/Kiln/rajshreeKilnTextColumn";

export const KilnRajshree = () => {
  const dispatch = useDispatch();
  return (
    <div className="Kilnrajshree w-100 h-100 position-relative">
      <div className="yellowline-Hr leftarrow rightarrow position-absolute pipe-15"></div>
      <div className="pipeVr position-absolute pipe-1"></div>
      <div className="pipeVr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeHr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>
      <div className="pipeHr position-absolute pipe-12"></div>
      <div className="pipeHr position-absolute pipe-13"></div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="yellowline-Hr position-absolute pipe-16"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-17"></div>
      <div className="yellowline-Hr position-absolute pipe-18"></div>
      <div className="yellowline-Hr position-absolute pipe-19"></div>
      <div className="yellowline-Hr position-absolute pipe-20"></div>
      <div className="yellowline-Hr position-absolute pipe-21"></div>
      <div className="yellowline-Hr position-absolute pipe-22"></div>
      <div className="yellowline-Hr position-absolute pipe-23"></div>
      <div className="yellowline-Hr position-absolute pipe-24"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-25"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-26"></div>
      <div className="yellowline-Hr position-absolute pipe-27"></div>
      <div className="yellowline-Hr position-absolute pipe-28"></div>
      <div className="yellowline-Hr position-absolute pipe-29"></div>
      <div className="yellowline-Hr position-absolute pipe-30"></div>
      <div className="pipeHr position-absolute pipe-31"></div>
      <div className="pipeHr position-absolute pipe-32"></div>
      <div className="pipeHr position-absolute pipe-33"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr position-absolute pipe-35"></div>
      <div className="yellowline-Vr position-absolute pipe-36"></div>
      <div className="yellowline-Vr position-absolute pipe-37"></div>
      <div className="yellowline-Vr position-absolute pipe-38"></div>
      <div className="yellowline-Vr position-absolute pipe-39"></div>
      <div className="yellowline-Vr position-absolute pipe-40"></div>
      <div className="yellowline-Vr position-absolute pipe-41"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-44"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-45"></div>
      <div className="yellowline-Vr position-absolute pipe-46"></div>
      <div className="yellowline-Vr position-absolute pipe-47"></div>
      <div className="yellowline-Vr position-absolute pipe-48"></div>
      <div className="yellowline-Vr position-absolute pipe-49"></div>
      <div className="yellowline-Vr position-absolute pipe-51"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-52"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-53"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-54"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-55"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-56"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-57"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-58"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-59"></div>
      <div className="yellowline-Hr position-absolute pipe-61"></div>
      <div className="yellowline-Hr position-absolute pipe-62"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-63"></div>
      <div className="yellowline-Vr position-absolute pipe-64"></div>
      <div className="yellowline-Vr position-absolute pipe-65"></div>

      <div className="img-94 position-absolute single-text-1 d-flex justify-content-between">
        <TextColumn list={tagsData.rajshreeKilnTextColumn10} />
        <TextColumn
          useClass="position-absolute single-text-1b"
          list={tagsData.rajshreeKilnTextColumn9}
        />
        <div className="position-absolute greenSqure single-text-1c"></div>
        <div className="position-absolute single-text-1d">
          <div className="greenSqure"></div>
          <div className="greenSqure mt-2"></div>
          <div className="greenSqure mt-2"></div>
        </div>
        <TextColumn
          useClass="position-absolute single-text-1e"
          list={tagsData.rajshreeKilnTextColumn8}
        />
        <BlackContainer
          data={{
            label: "KL_461KS1_G02",
            useClass: "greenTxt mt-1 position-absolute single-text-1f",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <div className="position-absolute single-text-1g">
          <span className="greenSqure"></span>
          <span className="greenSqure mt-1"></span>
          <BlackContainer
            data={{
              label: "Kiln_act_Rpm",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mt-2">
            <span className="greenSqure"></span>
            <span className="greenSqure ml-2"></span>
          </div>
          <div className="d-flex mt-1">
            <span className="greenSqure"></span>
            <span className="greenSqure ml-2"></span>
          </div>
        </div>
        <TextColumn
          useClass="position-absolute single-text-1h"
          list={tagsData.rajshreeKilnTextColumn7}
        />
        <SingleText
          useClass="position-absolute single-text-1i"
          yellowText="KILN FILLING %"
          textClass="text-dark ml-5 mt-1"
          data={{
            blackTextLabel: "KL_484BU2_TTP1",
            blackTextClass: "greenTxt",
            unit: "DEG C",
          }}
        />
        <TextColumn
          useClass="position-absolute single-text-1j"
          list={tagsData.rajshreeKilnTextColumn6}
        />
        <TextColumn
          useClass="position-absolute single-text-1k"
          list={tagsData.rajshreeKilnTextColumn5}
        />
      </div>
      <div className="triangle-with-squares position-absolute single-text-2"></div>
      <div className="triangle-with-squares position-absolute single-text-3"></div>
      <div className="CGRnBox position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute single-text-a",
            label: "Shell Cooling fans From KILN Outlet",
          }}
        />
        <div className="d-flex justify-content-end mt-2">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
        </div>
        <div className="d-flex align-items-end justify-content-between">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "53 mtr",
              }}
            />
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <span className="green-line-circle"> </span>
          </div>
          <div>
            <span className="green-line-circle"> </span>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-5">
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "ZONE-1 (0-15M)",
            }}
          />
          <span className="greySqure"></span>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "ZONE-2 (15-19M)",
            }}
          />
          <span className="greySqure"></span>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "ZONE-3 (19-23M)",
            }}
          />
          <span className="greySqure"></span>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "ZONE-4 (23-27M)",
            }}
          />
          <span className="greySqure"></span>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "ZONE-5 (27-41M)",
            }}
          />
          <span className="greySqure"></span>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "ZONE-6 (41-46M)",
            }}
          />
          <span className="greySqure"></span>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "ZONE-7 (46-49M)",
            }}
          />
          <span className="greySqure"></span>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "ZONE-8 (49-88M)",
            }}
          />
          <span className="greySqure"></span>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute single-text-a",
            label: "Kiln Tyre cooling Pumps",
          }}
        />
        <div className="d-flex flex-column justify-content-around h-100">
          <div className="d-flex justify-content-between">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "T-1",
                }}
              />
              <span className="green-line-circle"> </span>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "T-2",
                }}
              />
              <span className="green-line-circle"> </span>
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "T-3",
                }}
              />
              <span className="green-line-circle"> </span>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <span className="green-line-circle"> </span>
            <span className="green-line-circle"> </span>
            <span className="green-line-circle"> </span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="green-line-circle"> </span>
            <span className="green-line-circle"> </span>
            <span className="green-line-circle"> </span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="grey-line-circle"> </span>
            <span className="green-line-circle"> </span>
            <span className="green-line-circle"> </span>
          </div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute single-text-a",
            label: "Kiln Thruster cooling fan",
          }}
        />
        <div className="circle-group p-1 mt-1">
          <span className="green-line-circle"></span>
        </div>
      </div>

      <div className="CGRnBox position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute",
            label: "THRUST ROLLER HYDRALIC 464KT1",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_474SK1_FROM_CLR",
            useClass: "greenTxt mt-1 single-text-8x",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />

        <div className="outlinediv bg-theme-green position-absolute single-text-8a"></div>
        <div className="yellowline-Hr position-absolute line-8a"></div>
        <div className="yellowline-Hr position-absolute line-8b"></div>
        <div className="yellowline-Vr position-absolute line-8c"></div>
        <div className="outlinediv bg-theme-green position-absolute single-text-8b"></div>
        <div className="outlinediv bg-theme-green position-absolute single-text-8c"></div>
        <div className="outlinediv bg-theme-green position-absolute single-text-8d"></div>
        <div className="d-flex flex-column justify-content-center align-items-center position-absolute single-text-8e">
          <i className="fas fa-long-arrow-alt-down text-warning"></i>
          <div className="pipeVr">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TANK",
              }}
            />
          </div>
          <i className="fas fa-long-arrow-alt-down text-warning"></i>
        </div>
        <div className="d-flex flex-column justify-content-end align-items-center position-absolute single-text-8f">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "Y1",
              }}
            />
            <div className="tringle-item">
              <i className="fa-solid fa-caret-down d-block"></i>
              <i className="fa-solid fa-caret-up d-block"></i>
            </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "Y2",
              }}
            />
            <div className="tringle-item">
              <i className="fa-solid fa-caret-down d-block"></i>
              <i className="fa-solid fa-caret-up d-block"></i>
            </div>
          </div>
          <div className="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span className="grayDot m-auto"></span>
          </div>
          <i className="fas fa-long-arrow-alt-up text-warning ml-3"></i>
        </div>
        <div className="d-flex flex-column justify-content-left align-items-center position-absolute single-text-8g">
          <div className="d-flex ml-3">
            <div className="tringle-item">
              <i className="fa-solid fa-caret-down d-block"></i>
              <i className="fa-solid fa-caret-up d-block"></i>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "Y3",
              }}
            />
          </div>
          <div className="d-flex ml-3">
            <div className="tringle-item">
              <i className="fa-solid fa-caret-down d-block"></i>
              <i className="fa-solid fa-caret-up d-block"></i>
            </div>

            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "Y4",
              }}
            />
          </div>
          <div className="img-66 d-flex justify-content-center align-items-center">
            <span className="grayDot m-auto"></span>
          </div>
          <i className="fas fa-long-arrow-alt-up text-warning"></i>
        </div>
        <div className="d-flex position-absolute single-text-8h">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "464KT1M1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-5",
              label: "464KT1M2",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-9">
        <div className="outlinediv bg-theme-green position-absolute single-text-9a"></div>
        <div className="outlinediv bg-theme-green position-absolute single-text-9b"></div>
        <div className="position-absolute single-text-9c">
          <i className="fas fa-long-arrow-alt-up ml-2 text-warning"></i>
          <div className="img-66 d-flex justify-content-center align-items-center">
            <span className="green-line-circle"></span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "464LQ2M1",
            }}
          />
        </div>
        <div className="position-absolute single-text-9d">
          <i className="fas fa-long-arrow-alt-up ml-2 text-warning"></i>
          <div className="img-66 d-flex justify-content-center align-items-center">
            <span className="grey-line-circle"></span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "464LQ2M2",
            }}
          />
        </div>
        <div className="d-flex tringle-item position-absolute single-text-9e">
          <i className="fa-solid fa-caret-right d-block"></i>
          <i className="fa-solid fa-caret-left d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute single-text-9f">
          <i className="fa-solid fa-caret-right d-block"></i>
          <i className="fa-solid fa-caret-left d-block"></i>
        </div>
        <div className="yellowline-Vr position-absolute single-text-9g"></div>
        <div className="yellowline-Hr position-absolute single-text-9h"></div>
        <div className="yellowline-Vr position-absolute single-text-9i"></div>
        <div className="yellowline-Hr position-absolute single-text-9j"></div>
        <div className="greySqure position-absolute single-text-9k"></div>
        <div className="greySqure position-absolute single-text-9l"></div>
        <div className="grayDot position-absolute single-text-9m"></div>
        <div className="pipeVr position-absolute pipe-9a"></div>
        <div className="pipeHr position-absolute pipe-9b"></div>
        <TextColumn
          useClass="position-absolute single-text-9n"
          list={tagsData.rajshreeKilnTextColumn1}
        />
        <TextColumn
          useClass="position-absolute single-text-9o"
          list={tagsData.rajshreeKilnTextColumn3}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute single-text-9p",
            label: "COOLING TOWER",
          }}
        />
        <TextColumn
          useClass="d-flex justify-content-around w-100 position-absolute single-text-9q"
          list={tagsData.rajshreeKilnTextColumn2}
        />
        <div className="yellowline-Vr position-absolute single-text-9r"></div>
        <div className="yellowline-Hr position-absolute single-text-9s"></div>

        <BlackContainer
          data={{
            label: "KL_464GB2_LTP",
            useClass: "greenTxt position-absolute single-text-9t",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="CGRnBox position-absolute single-text-10">
        <div className="outlinediv bg-theme-green position-absolute single-text-9a"></div>
        <div className="outlinediv bg-theme-green position-absolute single-text-9b"></div>
        <div className="position-absolute single-text-9c">
          <i className="fas fa-long-arrow-alt-up ml-2 text-warning"></i>
          <div className="img-66 d-flex justify-content-center align-items-center">
            <span className="green-line-circle"></span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "464LQ1M2",
            }}
          />
        </div>
        <div className="position-absolute single-text-9d">
          <i className="fas fa-long-arrow-alt-up ml-2 text-warning"></i>
          <div className="img-66 d-flex justify-content-center align-items-center">
            <span className="grey-line-circle"></span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2",
              label: "464LQ1M1",
            }}
          />
        </div>
        <div className="d-flex tringle-item position-absolute single-text-9e">
          <i className="fa-solid fa-caret-right d-block"></i>
          <i className="fa-solid fa-caret-left d-block"></i>
        </div>
        <div className="d-flex tringle-item position-absolute single-text-9f">
          <i className="fa-solid fa-caret-right d-block"></i>
          <i className="fa-solid fa-caret-left d-block"></i>
        </div>
        <div className="yellowline-Vr position-absolute single-text-9g"></div>
        <div className="yellowline-Hr position-absolute single-text-9h"></div>
        <div className="yellowline-Vr position-absolute single-text-9i"></div>
        <div className="yellowline-Hr position-absolute single-text-9j"></div>
        <div className="greySqure position-absolute single-text-9k"></div>
        <div className="greySqure position-absolute single-text-9l"></div>
        <div className="grayDot position-absolute single-text-9m"></div>
        <div className="pipeVr position-absolute pipe-9a"></div>
        <div className="pipeHr position-absolute pipe-9b"></div>
        <TextColumn
          useClass="position-absolute single-text-9n"
          list={tagsData.rajshreeKilnTextColumn12}
        />
        <TextColumn
          useClass="position-absolute single-text-9o"
          list={tagsData.rajshreeKilnTextColumn13}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white position-absolute single-text-9p",
            label: "COOLING TOWER",
          }}
        />
        <div className="yellowline-Vr position-absolute single-text-9r"></div>
        <div className="yellowline-Hr position-absolute single-text-9s"></div>
        <BlackContainer
          data={{
            label: "KL_464GB1_LTP",
            useClass: "greenTxt position-absolute single-text-9t",
            unit: "M",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11">
        <div className="connector-both-side-2">
          <span className="green-line-circle"></span>
        </div>
        <BlackContainer
          data={{
            label: "464FNPM01_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12">
        <div className="connector-both-side-2">
          <span className="grey-line-circle"></span>
        </div>
        <BlackContainer
          data={{
            label: "464FNRM01_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-13">
        <div className="connector-both-side-2">
          <span className="green-line-circle"></span>
        </div>
        <BlackContainer
          data={{
            label: "464FNQM01_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <div className="connector-both-side-2">
          <span className="grey-line-circle"></span>
        </div>
        <BlackContainer
          data={{
            label: "464FNSM01_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <div className="connector-both-side-2">
          <span className="green-line-circle"></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "464FN7",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <div className="connector-both-side-2">
          <span className="grey-line-circle"></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "464FN8",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "464FN5M01_II",
            useClass: "greenTxt mb-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-both-side-2">
          <span className="grey-line-circle"></span>
        </div>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "464FN6M01_II",
            useClass: "greenTxt mb-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-both-side-2">
          <span className="grey-line-circle"></span>
        </div>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "464FN3M01_II",
            useClass: "greenTxt mb-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-both-side-2">
          <span className="green-line-circle"></span>
        </div>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "464FN4M01_II",
            useClass: "greenTxt mb-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-both-side-2">
          <span className="green-line-circle"></span>
        </div>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "464FN1M01_II",
            useClass: "greenTxt mb-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-both-side-2">
          <span className="grey-line-circle"></span>
        </div>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "464FN2M01_II",
            useClass: "greenTxt mb-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-both-side-2">
          <span className="grey-line-circle"></span>
        </div>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
      <div className="outlinediv border-dark bg-secondary position-absolute single-text-23">
        <div className="outlinediv border-dark rounded-circle rc1 d-flex">
          <span className="greenDot bg-dark m-auto"></span>
        </div>
        <div className="outlinediv border-dark rounded-circle rc2 d-flex ml-3">
          <span className="greenDot bg-dark m-auto"></span>
        </div>
        <div className="yellowline-Hr bg-dark position-absolute line-h"></div>
      </div>
      <div className="outlinediv border-dark bg-secondary position-absolute single-text-24">
        <div className="outlinediv border-dark rounded-circle rc1 d-flex">
          <span className="greenDot bg-dark m-auto"></span>
        </div>
        <div className="outlinediv border-dark rounded-circle rc2 d-flex ml-3">
          <span className="greenDot bg-dark m-auto"></span>
        </div>
        <div className="yellowline-Hr bg-dark position-absolute line-i"></div>
      </div>
      <div className="outlinediv border-dark bg-secondary position-absolute single-text-25">
        <div className="outlinediv border-dark rounded-circle rc1 d-flex">
          <span className="greenDot bg-dark m-auto"></span>
        </div>
        <div className="outlinediv border-dark rounded-circle rc2 d-flex ml-1">
          <span className="greenDot bg-dark m-auto"></span>
        </div>
        <div className="yellowline-Hr bg-dark position-absolute line-h"></div>
      </div>
      <div className="outlinediv border-dark bg-secondary position-absolute single-text-26">
        <div className="outlinediv border-dark rounded-circle rc1 d-flex">
          <span className="greenDot bg-dark m-auto"></span>
        </div>
        <div className="outlinediv border-dark rounded-circle rc2 d-flex ml-1">
          <span className="greenDot bg-dark m-auto"></span>
        </div>
        <div className="yellowline-Hr bg-dark position-absolute line-i"></div>
      </div>

      <div className="position-absolute single-text-27">
        <div className="tringle-item position-absolute single-text-27a">
          <i className="fa-solid fa-caret-down d-block"></i>
          <i className="fa-solid fa-caret-up d-block"></i>
        </div>
        <div className="tringle-item position-absolute single-text-27b">
          <i className="fa-solid fa-caret-down d-block"></i>
          <i className="fa-solid fa-caret-up d-block"></i>
        </div>
        <div className="outlinediv bg-theme-green">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white text-center mt-1",
              label: "464LQ7",
            }}
          />
          <div className="greenSqure mt-2 mx-auto"></div>
        </div>
        <div className="pipeVr text-center pt-2 mt-3 mx-auto">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Tank",
            }}
          />
        </div>
      </div>
      <div className="greySqure border-dark position-absolute single-text-28"></div>
      <div className="greySqure border-dark position-absolute single-text-29"></div>
      <div className="position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white text-right",
            label: "464EG1",
          }}
        />
        <div className="outlinediv p-1 d-flex border-dark bg-secondary mt-1">
          <span className="grayDot"></span>
          <span className="grayDot ml-1"></span>
          <span className="grayDot ml-1"></span>
          <span className="grayDot ml-1"></span>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center position-absolute single-text-31">
        <i className="fas fa-long-arrow-alt-up text-warning"></i>
        <div className="img-66 d-flex justify-content-center align-items-center">
          <span className="greenDot m-auto"></span>
        </div>
        <i className="fas fa-long-arrow-alt-up text-warning"></i>
        <div>
          <span className="greenSqure"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "464LQ3",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute single-text-32">
        <i className="fas fa-long-arrow-alt-up text-warning"></i>
        <div className="img-66 d-flex justify-content-center align-items-center">
          <span className="greenDot m-auto"></span>
        </div>
        <i className="fas fa-long-arrow-alt-up text-warning"></i>
        <div>
          <span className="greenSqure"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "464LQ5",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute single-text-33">
        <i className="fas fa-long-arrow-alt-up text-warning"></i>
        <div className="img-66 d-flex justify-content-center align-items-center">
          <span className="greenDot m-auto"></span>
        </div>
        <i className="fas fa-long-arrow-alt-up text-warning"></i>
        <div>
          <span className="greenSqure"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "464LQ4",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute single-text-34">
        <i className="fas fa-long-arrow-alt-up text-warning"></i>
        <div className="img-66 d-flex justify-content-center align-items-center">
          <span className="greenDot m-auto"></span>
        </div>
        <i className="fas fa-long-arrow-alt-up text-warning"></i>
        <div>
          <span className="greenSqure"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "464LQ6",
            }}
          />
        </div>
      </div>

      <BlackContainer
        data={{
          label: "464FN7M01_II",
          useClass: "greenTxt position-absolute single-text-35",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "464FN8M01_II",
          useClass: "greenTxt position-absolute single-text-36",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_464KT1_BTE4",
          useClass: "greenTxt position-absolute single-text-37",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-38">
        <div className="bg-red width-fit-content">
          <div className="circle-group p-1">
            <span className="grayDot">M</span>
          </div>
        </div>
        <div className="bg-red width-fit-content mt-3">
          <div className="circle-group p-1">
            <span className="grayDot">M</span>
          </div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-39",
          label: "FROM PREHEATER",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-40"
        yellowTextUp="KILN MD SP POWER"
        textClass="text-white"
        data={{
          blackTextLabel: "KL_MD_SP_PWR",
          blackTextClass: "greenTxt mt-1",
          unit: "KW",
        }}
      />
      <div className="position-absolute single-text-41">
        <div className="circle-group p-1 ml-auto">
          <span className="green-line-circle"></span>
          <span className="c-text">c</span>
        </div>
        <BlackContainer
          data={{
            label: "KL_464MD2_Curr",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_464MD2_Kw",
            useClass: "greenTxt mt-01",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <BlackContainer
          data={{
            label: "KL_464MD1_Curr",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_464MD1_Kw",
            useClass: "greenTxt mt-01",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <div className="circle-group p-1 ml-auto">
          <span className="green-line-circle"></span>
          <span className="c-text">c</span>
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <div className="d-flex justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "UPWARD",
            }}
          />
          <span className="greenSqure"></span>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "DOWNWARD",
            }}
          />
          <span className="greenSqure"></span>
        </div>
      </div>
      <div className="position-absolute single-text-44">
        <BlackContainer
          data={{
            label: "464AD1M01_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="border-danger width-fit-content mt-2">
          <div className="circle-group p-1">
            <span className="grayDot">M</span>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-45">
        <div className="border-danger width-fit-content">
          <div className="circle-group p-1">
            <span className="grayDot">M</span>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "461AD1",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KL_464GB1_XTA1",
          useClass: "greenTxt position-absolute single-text-46",
          unit: "mm/s",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "464AD1M01_II",
          useClass: "greenTxt position-absolute single-text-47",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_464KT1_BTE5",
          useClass: "greenTxt position-absolute single-text-48",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-49",
          label: "TERRIARY AIR  DUCT 464DU1",
        }}
      />
      <div className="d-flex justify-content-between position-absolute single-text-50">
        <BlackContainer
          data={{
            label: "KL_464DU1_DPTP",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "464CN1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "464CN2",
          }}
        />
      </div>
      <div className="CGRnBox border-dark position-absolute single-text-51">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-a",
            label: "TAD1 SG",
          }}
        />
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL",
            }}
          />
          <span className="greenSqure"></span>
          <span className="greenSqure ml-2"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "OP",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TAD2 SG",
          }}
        />
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CL",
            }}
          />
          <span className="greenSqure"></span>
          <span className="greenSqure ml-2"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "OP",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-52",
          label: "TERRIARY AIR  DUCT 464DU2",
        }}
      />
      <TextColumn
        useClass="d-flex justify-content-between position-absolute single-text-53"
        list={tagsData.rajshreeKilnTextColumn4}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-54",
          label: "COAL ENTRY",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-55"
        list={tagsData.rajshreeKilnTextColumn11}
      />
      <div className="position-absolute single-text-56">
        <div className="yellowline-Vr upArrow position-absolute single-text-60a"></div>
        <div className="width-fit-content">
          <div className="circle-group p-1">
            <span className="greenDot">M</span>
            <span className="c-text"> E </span>
          </div>
        </div>
      </div>

      <BlackContainer
        data={{
          label: "461HU1_ZT01",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "mm",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-58">
        <div className="tringle-item">
          <i className="fa-solid fa-caret-down d-block"></i>
          <i className="fa-solid fa-caret-up d-block"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-2",
            label: "Y5",
          }}
        />
      </div>
      <button
        className="d-block btn greenbtn position-absolute single-text-59"
        onClick={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "rajshreeKilnMD2",
              plant: "rajashree",
              plantcode: "RC",
            },
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "rajshreeKilnMD2",
              plant: "rajashree",
              plantcode: "RC",
            },
          });
        }}
      >
        MD2 Temp
      </button>
      <button
        className="d-block btn greenbtn position-absolute single-text-67"
        onClick={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "rajshreeKilnMD1",
              plant: "rajashree",
              plantcode: "RC",
            },
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "rajshreeKilnMD1",
              plant: "rajashree",
              plantcode: "RC",
            },
          });
        }}
      >
        MD1 Temp
      </button>
      <div className="position-absolute single-text-60">
        <div className="yellowline-Vr upArrow position-absolute single-text-60a"></div>
        <div className="width-fit-content">
          <div className="circle-group p-1">
            <span className="greenDot">M</span>
          </div>
        </div>
      </div>
      <button
        className="d-block btn greenbtn position-absolute single-text-61"
        onClick={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "rajshreeKilnGB2",
              plant: "rajashree",
              plantcode: "RC",
            },
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "rajshreeKilnGB2",
              plant: "rajashree",
              plantcode: "RC",
            },
          });
        }}
      >
        GB2 Temp
      </button>
      <button
        className="d-block btn greenbtn position-absolute single-text-63"
        onClick={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "rajshreeKilnGB1",
              plant: "rajashree",
              plantcode: "RC",
            },
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "rajshreeKilnGB1",
              plant: "rajashree",
              plantcode: "RC",
            },
          });
        }}
      >
        GB1 Temp
      </button>
      <div className="position-absolute single-text-62">
        <div className="outlinediv border-dark bg-secondary"></div>
        <div className="outlinediv border-dark bg-secondary"></div>
        <div className="outlinediv border-dark bg-secondary"></div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-65",
          label: "ROTARY KILN",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-66",
          label: "Limit Switch  Position >+ 50mm",
        }}
      />
    </div>
  );
};

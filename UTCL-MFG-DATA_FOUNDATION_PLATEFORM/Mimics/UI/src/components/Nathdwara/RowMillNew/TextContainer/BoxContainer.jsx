import {
  BlackDotWithGreenBroder,
  Squrebox,
  BlackContainer,
  TextContainer,
} from "../../../";

export const BoxContainer = ({ data }) => {
  return (
    <div className="boxContainer" style={data.useStyle}>
      {data.label !== "" && data.label !== null && (
        <div style={data.useStyle} className={data.useClass}>
          {data.label}
        </div>
      )}
      {data.Children.map((x, i) => {
        return (
          <div className="parent" key={i}>
            {x.squrebox === true && <Squrebox className={x.squreboxClass} />}
            <BlackContainer data={x} />
          </div>
        );
      })}
    </div>
  );
};

export const BoxContainerTableWithTopLabel = ({ data }) => {
  return (
    <div className="boxContainer">
      {" "}
      {data.label !== "" && data.label !== null && (
        <div className={data.useClass} style={data.useStyle}>
          {data.label}
        </div>
      )}
      <table>
        <tbody>
          {data.Children.map((x, index) => {
            return (
              <tr key={index}>
                {x.label !== "" && x.label !== null && (
                  <td className={data.useClass} style={data.useStyle}>
                    {x.label}
                  </td>
                )}
                {x.dataLabel.map((y, i) => {
                  return (
                    <td key={i}>
                      {y.usetype !== undefined &&
                      y.usetype === "text-container" ? (
                        <TextContainer data={y} />
                      ) : (
                        y.label !== "" &&
                        y.label !== undefined && <BlackContainer data={y} />
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const BoxContainerTable = ({ data }) => {
  return (
    <div className="boxContainer">
      <table>
        <tbody>
          {data.Children.map((x, index) => {
            return (
              <tr key={index}>
                {x.label !== "" && x.label !== null && (
                  <td
                    style={data.useStyle}
                    className={data.useClass}
                    colSpan={x.useColSpan}
                  >
                    {x.label} {x.label2 !== "" && x.label2 !== null && x.label2}
                  </td>
                )}
                {x.dataLabel.map((y, i) => {
                  return (
                    <td key={i}>
                      {y.usetype !== undefined &&
                      y.usetype === "text-container" ? (
                        <TextContainer data={y} />
                      ) : (
                        y.label !== "" &&
                        y.label !== undefined && <BlackContainer data={y} />
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const BoxContainerMiddleTable = ({ data }) => {
  return (
    <div className="boxContainer" style={{ width: "200px" }}>
      <div className="d-flex justify-content-between">
        <div>
          <TextContainer data={{ label: "361SR1", useClass: "yellowTxt" }} />
        </div>
        <div>
          <TextContainer data={{ label: "Grease PR", useClass: "yellowTxt" }} />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <BlackContainer
            data={{
              useClass: "greenTxt mw-60 lineheight14",
              label: "361SR1_MAN",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              useClass: "greenTxt mw-60 lineheight14",
              label: "361SR1PZ1",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <BlackContainer
            data={{
              useClass: "greenTxt mw-60 lineheight14",
              label: "361SR1SZ1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainer
            data={{ label: "361SR1", useClass: "yellowTxt" }}
          ></TextContainer>
        </div>
        <div>
          <TextContainer
            data={{ label: "361SR1", useClass: "yellowTxt" }}
          ></TextContainer>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <BlackContainer
            data={{
              useClass: "greenTxt mw-60 lineheight14",
              label: "361SR1IZ1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackDotWithGreenBroder
            data={{ label: "", useClass: "yellowTxt" }}
          ></BlackDotWithGreenBroder>
        </div>
        <div>
          <BlackDotWithGreenBroder
            data={{ label: "", useClass: "yellowTxt" }}
          ></BlackDotWithGreenBroder>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="text-center">
          <p className="yellow-text d-block">LUA</p>
          <p className="grn-circle d-block"></p>{" "}
        </div>
        <div className="text-center">
          <p className="yellow-text d-block">LUB</p>
          <p className="grn-circle d-block"></p>{" "}
        </div>
        <div className="text-center">
          <p className="yellow-text d-block">LUF</p>
          <p className="grn-circle d-block"></p>{" "}
        </div>
        <div className="text-center">
          <p className="yellow-text d-block">LUB_S</p>
          <p className="blk-circle d-block"></p>{" "}
        </div>
      </div>
    </div>
  );
};

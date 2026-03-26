import { GreenDot, BlackContainer, TextContainer } from "../../../../index";

export const CGrnBox2 = () => {
  return (
    <div className="CGRnBox">
      <div className="d-flex justify-content-between">
        <TextContainer data={{ label: "G.B.LUB.", useClass: "yellowTxt" }} />

        <BlackContainer
          data={{
            useClass: "greenTxt mw-60 lineheight14",
            label: "361GB1TZ1",
            unit: "C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-between">
        <div className="ml-2">
          {" "}
          <i className="fas fa-long-arrow-alt-up"></i>
        </div>
        <div className="ml-4">
          {" "}
          <i className="fas fa-long-arrow-alt-up"></i>
        </div>
        <div className="ml-4">
          {" "}
          <i className="fas fa-long-arrow-alt-up"></i>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <GreenDot data={{ useClass: "ml-2" }} />
        <GreenDot data={{ useClass: "ml-4" }} />
        <GreenDot data={{ useClass: "ml-4" }} />
      </div>
      <div className="d-flex justify-content-between">
        <TextContainer data={{ label: "361GB1", useClass: "yellowTxt mr-4" }} />
        <TextContainer data={{ label: "LUC", useClass: "yellowTxt" }} />
        <TextContainer data={{ label: "LUD", useClass: "yellowTxt" }} />
      </div>
    </div>
  );
};

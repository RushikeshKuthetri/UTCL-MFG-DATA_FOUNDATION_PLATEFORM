import {
  BlackCross,
  GreenDot,
  BlackContainer,
  TextContainer,
} from "../../../../index";
import "./CGrnBox1.css";

export const CGrnBox1 = () => {
  return (
    <div className="CGRnBox">
      <div className="d-flex">
        <TextContainer data={{ label: "R.M.HYD", useClass: "yellowTxt" }} />
      </div>
      <div className="d-flex">
        <BlackContainer
          data={{
            useClass: "greenTxt mw-60 lineheight14",
            label: "361HY1CYL1-PZ1",
            unit: "B",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-between">
        <div className="mr-4">
          {" "}
          <i className="fas fa-long-arrow-alt-up"></i>
        </div>
        <div>
          {" "}
          <i className="fas fa-long-arrow-alt-up"></i>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <BlackCross data={{ useClass: "mr-4" }} />
        <GreenDot data={{ useClass: "ml-2" }} />
      </div>
      <div className="d-flex justify-content-between">
        <TextContainer data={{ label: "LU1", useClass: "yellowTxt mr-4" }} />
        <TextContainer data={{ label: "LU2", useClass: "yellowTxt" }} />
      </div>
    </div>
  );
};

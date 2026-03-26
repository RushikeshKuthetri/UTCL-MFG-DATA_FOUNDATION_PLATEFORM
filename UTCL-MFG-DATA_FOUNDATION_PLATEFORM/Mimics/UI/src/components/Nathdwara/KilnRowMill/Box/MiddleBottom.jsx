import { BlackContainer } from "../../../";

export const MiddleBottom = () => {
  return (
    <div className="col-2 pl-0 pr-0 align-self-end resetlastbox2">
      <div className="CGRnBox p-1 mt-2">
        <div className="d-flex justify-content-between  mt-1">
          <div className="yellowTxt text-center">KILN BIN</div>
          <div className="yellowTxt text-center">CALCINER BIN</div>
        </div>
        <div className="d-flex justify-content-between  mt-1">
          <BlackContainer
            data={{
              label: "C1_L91FB1WZ1",
              useClass: "greenTxt",
              unit: "T",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C1_L91FB2WZ1",
              useClass: "greenTxt",
              unit: "T",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
    </div>
  );
};

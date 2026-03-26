import { BlackContainer } from "../../../BlackContainer/BlackContainer";
export const Popup10CM1 = () => {
  return (
    <div className="mdTemp-popup p-2">
      <div className="box-1">
        <div className="text-white text-center box-1">561LQ3</div>
        <div className="d-flex p-3">
          <div className="mr-2">
            <div className="text-white text-center">561HE5</div>
            <div className="PopupLQ1img1 mx-auto mt-2"></div>
            <div className="text-white text-center mt-2">561LU7</div>
            <div className="circle-group mt-2 mx-auto">
              <span className="green-line-circle"></span>
            </div>
          </div>
          <div className="mr-2">
            <div className="text-white text-center">561HE6</div>
            <div className="PopupLQ1img1 mx-auto mt-2"></div>
            <div className="text-white text-center mt-2">561LU8</div>
            <div className="circle-group mt-2 mx-auto">
              <span className="green-line-circle"></span>
            </div>
          </div>
          <div className="mr-2 p-2">
            <div className="grid-container-3">
              <div className="greenDot">L</div>
              <div className="greenDot">L</div>
              <div className="greenDot">P</div>
              <div className="greenDot">P</div>
              <div className="greenDot">D</div>
            </div>
            <div>
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

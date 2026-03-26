import { topRightBox } from "../../../../data/nathdwara/kiln/topRightBox";
import { BlackContainer } from "../../../";

export const TopRightBox = () => {
  return (
    <div className="CGRnBox p-1 position-absolute singletext-39">
      <div className="yellowTxt text-center">451FN1</div>
      <div className="d-flex mt-1">
        <div className="yellowTxt text-center">GRR SP</div>
        <div className="yellowTxt text-center">SPRS SP</div>
      </div>
      {topRightBox.map((obj, index) => {
        return (
          <div className="d-flex mt-1" key={index}>
            {obj.blackText.map((blackTextObj, index) => {
              return (
                <BlackContainer
                  data={{
                    label: blackTextObj.blackTextLabel,
                    useClass: "greenTxt",
                    unit: blackTextObj.unit,
                    unitColor: "unitColor",
                  }}
                  key={index}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

import { middleBottom1 } from "../../../../data/nathdwara/kiln/bottom";
import { BlackContainer } from "../../../";

export const BottomBox = () => {
  return (
    <div className="col-3 pl-0 pr-0 align-self-end">
      <div className="CGRnBox p-1">
        <div className="grid-container-3">
          <div className="lightyellowtext text-center">461MD1</div>
          {middleBottom1.map((obj, index) => {
            return (
              <BlackContainer
                data={{
                  label: obj.blackTextLabel,
                  useClass: "greenTxt d-flex",
                  unit: obj.unit,
                  unitColor: "unitColor",
                }}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

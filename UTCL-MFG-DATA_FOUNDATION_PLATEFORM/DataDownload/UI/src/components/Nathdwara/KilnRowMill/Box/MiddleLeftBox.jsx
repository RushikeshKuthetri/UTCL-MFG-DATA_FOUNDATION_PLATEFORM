import { BlackContainer } from "../../../";

export const MiddleLeftBox = ({ list, useClass, divClass }) => {
  return (
    <div className={`${useClass}`}>
      <div className="yellowTxt text-center">{list[0]}</div>
      <div className={`${divClass}`}>
        {list.map((obj, index) => {
          return (
            index !== 0 &&
            obj.blackText.map((blackTextObj, index) => {
              return (
                <BlackContainer
                  data={{
                    label: blackTextObj.blackTextLabel,
                    useClass: "greenTxt d-flex",
                    unit: blackTextObj.unit,
                    unitColor: "unitColor",
                  }}
                  key={index}
                />
              );
            })
          );
        })}
      </div>
    </div>
  );
};

import { BlackContainer } from "../../../";

export const BottomLeftBox = ({ useClass, parentDivClass, list }) => {
  return (
    <div className={`${parentDivClass}`}>
      {list.map((obj, index) => {
        return (
          <div className={`${useClass}`} key={index}>
            <div className={`${obj.yellowTextColorClass} text-center`}>
              {obj.yellowText}
            </div>
            {obj?.blackText?.map((blackTextObj, index) => {
              return (
                <BlackContainer
                  data={{
                    label: blackTextObj.blackTextLabel,
                    useClass: blackTextObj.blackTextClass || "greenTxt",
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

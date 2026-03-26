import { maiharfirealarmTextcolumn } from "../../../../data/maihar/firealarm/maiharfirealarmTextcolumn";
import { FireAlarmTag } from "./FireAlarmTag";

export const FireAlarmMaihar = () => {
  return (
    <div className="w-100 h-100 position-relative">
      {maiharfirealarmTextcolumn.map(
        ({ mainHeading, tagsList, divClass }, index) => {
          return (
            <div
              key={index}
              className="col-12 d-flex flex-column justify-content-between firealarm-maihar"
            >
              <h1 className="text-center my-2">{mainHeading}</h1>
              {tagsList.map((row) => {
                return (
                  <div className={divClass} key={index}>
                    {row.map((obj, index) => {
                      return <FireAlarmTag obj={obj} key={index} />;
                    })}
                  </div>
                );
              })}
            </div>
          );
        }
      )}
    </div>
  );
};

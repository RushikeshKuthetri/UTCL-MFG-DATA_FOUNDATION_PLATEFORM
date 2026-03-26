import { BlackContainer } from "../../../";

export const AutoManual = ({ list, useClass, manualText, autoText }) => {
  return (
    <div className={`${useClass}`}>
      {autoText && (
        <div className="bg-white text-dark position-absolute">{autoText}</div>
      )}
      <div className="box-2">
        {manualText && <div className="bg-white text-dark">{manualText}</div>}
        {list.map((obj) => {
          return (
            <BlackContainer
              data={{
                label: obj.blackTextLabel,
                useClass: obj.blackTextClass,
                unit: obj.unit,
                unitColor: "unitColor",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

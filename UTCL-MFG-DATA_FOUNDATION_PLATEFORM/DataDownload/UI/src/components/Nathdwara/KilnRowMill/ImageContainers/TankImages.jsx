import { BlackContainer } from "../../../";

export const TankImage = ({ useClass, tankName, list }) => {
  return (
    <div className={`${useClass}`}>
      <div className="cgreengradientbox w-100">
        <div className="text-center text-dark">{tankName}</div>
        {list.map((obj, index) => {
          return (
            <BlackContainer
              data={{
                label: obj.blackTextLabel,
                useClass: obj.blackTextClass,
                unit: obj.unit,
                unitColor: "unitColor",
              }}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

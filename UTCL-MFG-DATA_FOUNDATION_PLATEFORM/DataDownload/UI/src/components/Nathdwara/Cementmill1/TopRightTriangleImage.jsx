import { BlackContainer } from "../../index";

export const TopRightTriangleImage = ({
  useClass,
  list1,
  textOfTriangle,
  data,
  list2,
  secondText,
  secondTextClass,
}) => {
  return (
    <div className={useClass}>
      {list1.map((obj, index) => {
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

      <div className="containerImage mt-1">
        <div className="wrapTextDiv">{textOfTriangle}</div>
        {data && <BlackContainer data={data} />}
      </div>
      <div className="downArrow"></div>
      <div className="hpipecircle single-text-8">
        <span className="greenDot"></span>
      </div>

      {list2.map((obj, index) => {
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

      <div className={secondTextClass}>{secondText}</div>
    </div>
  );
};

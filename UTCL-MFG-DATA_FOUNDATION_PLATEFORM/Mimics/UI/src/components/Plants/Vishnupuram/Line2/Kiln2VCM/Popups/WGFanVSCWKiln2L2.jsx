import { TextContainerWithWrapWord } from "../../../../../Nathdwara";
import { WGFanDigitalComponent } from "./WGFanDigitalComponent";

export const WGFanVSCWKiln2L2 = ({ childrenData }) => {
  return (
    <div>
      {childrenData.map(({ divClass, childHeading, childData }, index) => {
        return (
          <div className={`${divClass}`} key={index}>
            <div className={childHeading.className}>{childHeading.text}</div>
            <div className="d-flex">
              {childData.map((tagsData, j) => {
                return (
                  <div key={j} className={`${j > 0 && `ml-2`} mt-1`}>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "cgreentext",
                        label: j + 1,
                      }}
                    />
                    <WGFanDigitalComponent label={tagsData} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

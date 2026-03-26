import { BlackContainer } from "../../../../";

export const SingleText2 = () => {
  return (
    <div className="singletext-2 position-absolute d-flex flex-column">
      <div className="yellowTxt text-center">PC OIL ANALYZER</div>
      <div className="d-flex">
        <div className="yellowTxt text-center">O2</div>
        <BlackContainer
          data={{
            label: "K1_451PC1AZ3",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex">
        <div className="yellowTxt text-center">CO</div>
        <BlackContainer
          data={{
            label: "K1_451PC1AZ4",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
    </div>
  );
};

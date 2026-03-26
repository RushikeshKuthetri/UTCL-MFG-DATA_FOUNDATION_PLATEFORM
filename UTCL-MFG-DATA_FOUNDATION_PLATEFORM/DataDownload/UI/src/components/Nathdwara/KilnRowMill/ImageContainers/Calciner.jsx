import { BlackContainer } from "../../../";

export const Calciner = () => {
  return (
    <div className="middle-sqr-container position-absolute text-center">
      <div className="text-dark">CALCINER</div>
      <BlackContainer
        data={{
          label: "C1_451CRS2_AO",
          useClass: "greenTxt mt-1",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "C1_451CRS2_FZ1",
          useClass: "greenTxt mt-2",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "C1_451BL2_PZ1",
          useClass: "greenTxt mt-1",
          unit: "MMWC",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};

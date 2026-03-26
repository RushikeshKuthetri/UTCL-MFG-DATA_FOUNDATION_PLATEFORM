import { BlackContainer } from "../../../";

export const TextColumn3 = () => {
  return (
    <div className="d-flex flex-column align-items-start pt-3 mt-4">
      <BlackContainer
        data={{
          label: "K1_431DG1_AO1",
          useClass: "greenTxt",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="yellowTxt text-center mt-2">431FM1</div>
      <BlackContainer
        data={{
          label: "K1_431FM1_SP_SEL",
          useClass: "greenTxt",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />

      <BlackContainer
        data={{
          label: "K1_431FM1_FZ1",
          useClass: "greenTxt mt-01",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "K1_431FM1PZ1",
          useClass: "greenTxt mt-01",
          unit: "mmWc",
          unitColor: "unitColor",
        }}
      />

      <div className="yellowTxt text-center mt-2">431FM2</div>
      <BlackContainer
        data={{
          label: "K1_431FM2_SP_SEL",
          useClass: "greenTxt mt-01",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "K1_431FM2_FZ1",
          useClass: "greenTxt mt-01",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "K1_431FM2PZ1",
          useClass: "greenTxt mt-01",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />

      <div className="cgreentext text-cente mt-2">FEED BIN WT.</div>
      <BlackContainer
        data={{
          label: "K1_411FB1_WZ3",
          useClass: "greenTxt mt-01",
          unit: "TON",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};

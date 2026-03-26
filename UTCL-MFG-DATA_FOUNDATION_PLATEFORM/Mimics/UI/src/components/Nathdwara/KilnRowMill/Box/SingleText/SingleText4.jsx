import { BlackContainer } from "../../../../";

export const SingleText4 = () => {
  return (
    <div className="singletext-4 position-absolute d-flex flex-column">
      {/* <div className="box-2">
        <BlackContainer
          data={{
            label: "451PC1TZ9_PID",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "451PC1TZ9_PID",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div> */}
      <BlackContainer
        data={{
          label: "C1_451SC1SZ1",
          useClass: "greenTxt mt-2",
          unit: "RPM",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "C1_451SC2SZ1",
          useClass: "greenTxt mt-1",
          unit: "RPM",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "C1_451FM1_FZ1",
          useClass: "greenTxt mt-2",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "C1_451FM1_PZ1",
          useClass: "greenTxt mt-1",
          unit: "mmwc",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};

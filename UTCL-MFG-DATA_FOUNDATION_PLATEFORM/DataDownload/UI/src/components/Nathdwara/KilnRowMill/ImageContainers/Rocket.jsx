import { BlackContainer } from "../../../";

export const Rocket = () => {
  return (
    <div className="long-width-container position-absolute d-flex pl-4">
      <div className="w-90 d-flex align-items-center justify-content-between">
        <BlackContainer
          data={{
            label: "C1_461KL1_PZ2",
            useClass: "greenTxt align-self-baseline",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1_461KL1TZE",
            useClass: "greenTxt  mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex flex-column">
          <BlackContainer
            data={{
              label: "C1_461MD1_IZ1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C1_461MD1_JZ1",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K1_441PH1_PZ4",
            useClass: "greenTxt mt-1",
            unit: "MM",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex flex-column">
          <BlackContainer
            data={{
              label: "C1_461MD1_AO",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C1_461MD1_SZ1",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
    </div>
  );
};

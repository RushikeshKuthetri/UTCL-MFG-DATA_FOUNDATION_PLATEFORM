import { BlackContainer } from "../../../BlackContainer/BlackContainer";

export const BagaUHParamsDashboard = ({ list }) => {
  return (
    <div className="offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 px-1 pt-3">
      <div className="table-responsive bagatabelscroll border border-secondary text-nowrap">
        <table className="table">
          <thead>
            <tr>
              <th className="bg-light text-dark">Description</th>
              <th className="bg-light text-dark">Operating Value</th>
              <th className="bg-light text-dark">Current Value</th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ textDescription, operationValue, data }) => {
              const { blackTextLabel, unit } = data;
              return (
                <tr>
                  <td>
                    <div>{textDescription}</div>
                  </td>
                  <td>{operationValue}</td>
                  <td>
                    <BlackContainer
                      data={{
                        label: blackTextLabel,
                        useClass: "greenTxt",
                        unit: unit,
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

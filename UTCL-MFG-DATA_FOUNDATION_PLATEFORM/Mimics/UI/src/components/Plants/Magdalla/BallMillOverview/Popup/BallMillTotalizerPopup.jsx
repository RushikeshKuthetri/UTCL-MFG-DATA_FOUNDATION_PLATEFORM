import { BlackContainer } from "../../../../BlackContainer/BlackContainer";
import { TextContainerWithWrapWord } from "../../../../Nathdwara";

export const BallMillTotalizerPopup = ({ popData }) => {
  return (
    <div className="mdTemp-popup p-2 text-center">
      <div className="col-12 p-1">
        <div className="text-white text-center">FEED COUNTER</div>
        
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>TODAY</th>
              <th>PREVIOUS DAY</th>
              <th>MTD</th>
              <th>YTD</th>
              <th>OPC</th>
              <th>PD</th>
              <th>PPC</th>
              <th>PD</th>
            </tr>
          </thead>
          <tbody>
            {popData.map(({ cgrnTxt, data }) => {
              return (
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark",
                        label: `${cgrnTxt}`,
                      }}
                    />
                  </td>

                  {data?.map(({ blackTextLabel, blackTextClass }) => {
                    return (
                      <td>
                        <BlackContainer
                          data={{
                            label: blackTextLabel,
                            useClass: blackTextClass,
                            unit: "",
                            unitColor: "unitColor",
                          }}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

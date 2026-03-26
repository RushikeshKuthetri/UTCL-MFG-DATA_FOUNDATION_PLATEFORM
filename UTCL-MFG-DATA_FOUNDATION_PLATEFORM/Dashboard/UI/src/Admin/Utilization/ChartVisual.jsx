import React from 'react'
import "./ModuleUtilize.scss";
import { useEffect, useState } from 'react';
import moment from "moment";
import {
  createBarChart,
  createLineChart,
} from "../../utils/chartMethods";
import Highcharts, { objectEach } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {
  getDailyUserData,
  monthlyUserData,
  weeklyUserData,
} from "../../utils/utliizationApi";
const ChartVisual = (props) => {

  const [lineChart, setLineChart] = useState({});
  const [barChart, setBarChart] = useState({});
  useEffect(() => {
    console.log("chart useEffect");
    // console.log(props.stateprop.plant='');
    console.log(props, "chart");
    if (props.stateprop.plant === '' || props.stateprop.submit === false) {
      setLineChart({});
      setBarChart({});
    } else {
      if (props.stateprop.key === "Chart") {
        console.log("else");
        callGrapgh()
      }

    }

  }, [props])
  const callGrapgh = async () => {
    let payload = {};
    let dailyUser = await getDailyUserData(payload);
    let monthlyData = await monthlyUserData(payload);
    getLineChart(dailyUser);
    getBarChart(monthlyData);
  }
  const getLineChart = (dailyUser) => {
    console.log(props.stateprop, "line chart");
    let result = createLineChart(dailyUser);
    console.log(result);
    setLineChart(result);
  };
  const getBarChart = (monthlyData) => {
    let result = createBarChart(monthlyData);
    setBarChart(result);
  };
  return (
    <>
      {Object.keys(lineChart).length === 0 &&
        Object.keys(barChart).length === 0 ? (
        <>
          <div>
            <p className="mt-3 flex flex-col items-center justify-center h-40 rounded-lg">
              <div class="text-3xl mb-3 zoom-animation">🔍</div>

              {/* <!-- Title --> */}
              <h2 class="text-lg font-semibold text-[var(--leftdrawer-text)] mb-2">
                No Data Found
              </h2>

              {/* <!-- Description --> */}
              <p class="text-sm text-[var(--card-subtle)] mb-1">
                Try changing the filters or refresh the data
              </p>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="card card-apply-module mb-4 mt-3">
            <div className="row">
              <div className="col-12">
                <div className="card card-apply-module">
                  <div className="card-header-module">Daily User Data</div>
                  <div className="charts-module-line mt-2">
                    <div className="line-chart">
                      {Object.keys(lineChart).length > 0 ? (
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={lineChart}
                        />
                      ) : (
                        <div>
                          <p className="mt-3 flex flex-col items-center justify-center h-40 border rounded-lg">
                            <div class="text-3xl mb-3 zoom-animation">🔍</div>

                            {/* <!-- Title --> */}
                            <h2 class="text-lg font-semibold text-[var(--leftdrawer-text)] mb-2">
                              No Daily Data Found
                            </h2>

                            {/* <!-- Description --> */}
                            <p class="text-sm text-[var(--card-subtle)] mb-1">
                              Try changing the filters or refresh the data
                            </p>
                          </p>
                        </div>

                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-apply-module">
            <div className="row">
              {/* <div className="col-6">
                  <div className="card card-apply-module">
                    <div className="card-header-module">Weekly</div>
                    <div className="pie-charts mt-2" id="chart-container">
                      <div className="pie-container">
                        {Object.keys(pieChart).length > 0 ? (
                          <HighchartsReact
                            highcharts={Highcharts}
                            options={pieChart}
                          />
                        ) : (
                          <div className="no-utilize-found">
                            No Weekly Data Found
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div> */}
              <div className="col-6">
                <div className="card card-apply-module">
                  <div className="card-header-module">Monthly</div>
                  <div className="bar-charts mt-2" id="chart-container">
                    <div className="bar-container">
                      {Object.keys(barChart).length > 0 ? (
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={barChart}
                        />
                      ) : (
                        <div className="no-utilize-found">
                          No Monthly data found
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ChartVisual
import ReactEcharts from "echarts-for-react";
import "./ColumnChart.css";

const ColumnChart = ({ data, color, isloading, error }) => {
  color = color ? color : "#f75414";

  /**
   *
   * @param {*} color
   * @param {*} opacity
   * @returns color with alpha value
   */
  const addAlpha = (color, opacity = 0.2) => {
    var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
  };

  const options = {
    color,
    darkMode: true,
    barMaxWidth: "12px",
    grid: {
      left: "20px",
      right: "10px",
      bottom: "15px",
      top: "15px",
      containLabel: false,
    },
    xAxis: {
      type: "category",

      show: true,
      axisLabel: {
        rotate: 45,
        formatter: (value) => {
          // console.log("value is ", value);
          // format label accordingly here
          return value;
        },
      },
    },
    yAxis: {
      type: "value",
      show: false,
    },

    series: [
      {
        data: data,
        type: "bar",
      },
    ],
  };

  return (
    <>
      <div style={{ height: "100%" }} className="column_container">
        <div
          className="column_container_inner"
          style={{ backgroundColor: addAlpha(color) }}
        >
          {data || !isloading || !error ? (
            <ReactEcharts
              style={{
                width: "85%",
                aspectRatio: "1/1",
                height: "100%",
                margin: "auto",
              }}
              option={options}
            />
          ) : (
            <p>noting to show</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ColumnChart;

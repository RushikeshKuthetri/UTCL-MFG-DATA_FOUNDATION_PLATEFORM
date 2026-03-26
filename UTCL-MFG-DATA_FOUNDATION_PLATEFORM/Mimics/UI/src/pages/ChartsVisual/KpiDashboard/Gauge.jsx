import ReactEcharts from "echarts-for-react";

const GaugeChart = ({ maxValue, value, loading }) => {
  const options = {
    series: [
      {
        type: "gauge",
        detail: { formatter: `${value}`, color: "white", fontSize: 16 },
        data: [{ value: value }],
        min: 0,
        max: maxValue || 10,
        axisLine: {
          show: true,
          lineStyle: {
            width: 3,
          },
        },
        axisLabel: {
          distance: 0,
          color: "white",
          fontWeight: "bolder",
          fontSize: 7,
        },
        splitLine: { show: false, distance: 0, lineStyle: { width: 0 } },
        axisTick: { show: false, distance: 0, lineStyle: { width: 0 } },
        pointer: { width: 2, itemStyle: "red" },
      },
    ],
  };

  return (
    <>
      {!loading ? (
        <ReactEcharts style={{ height: "100%" }} option={options} />
      ) : (
        <p style={{ color: "white", fontWeight: "700" }}>loading</p>
      )}
    </>
  );
};

export default GaugeChart;

import ReactECharts from "echarts-for-react";
import { useState } from "react";
import { colors } from "../../data/chartOpions/chatOptions";
 
const GaugeChart = ({ options }) => {
  const newOptions = { ...options };
 
  const type = "gauge";
 
  const series = [...options.series];
  const totalSeries = series.length;
  const selectedSeriesIndex = series.findIndex((s) => s.select);
  const [selectedSeries, setSelectedSeries] = useState(
    series[selectedSeriesIndex]
  );
 
  const [currentTag, setCurrentTag] = useState(selectedSeries.name);
  newOptions.series = [selectedSeries];
 
  function getColorIndex(index) {
    return index % colors.length;
  }
  function toggleSeries(i) {
    series.forEach((s) => (s.select = false));
    const newSeries = series[i];
    newSeries.select = true;
    newOptions.series = [newSeries];
    setCurrentTag(newSeries.name);
    setSelectedSeries(newSeries);
  }

  const legends = [];
  series.forEach((s, i) => {
    legends.push(
      <div
        key={i}
        style={{
          textAlign: "right",
           color: s.select ? "var(--text-color)" : "var(--card-subtle, gray)",  
          display: "flex",
          gap: "7px",
          marginTop: "5px",
          cursor: "pointer",
        }}
        onClick={() => toggleSeries(i)}
      >
        <span
          style={{
            height: "20px",
            width: "20px",
            borderRadius: "5px",
            backgroundColor: colors[getColorIndex(i)].dark,
            display: "block",
            border: s.select ? "2px solid gray" : "none",
            transform: s.select ? "scale(1.2)" : "none",
            animation: "all 2s ease-in-out",
          }}
        ></span>
        {/* <span>{s.name}</span> */}
      </div>
    );
  });

  return (
    <div
      className="main-container"
      style={{
        height: "95%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="legend-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          padding: "5px",
          gap: "5px",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {legends}
      </div>
      <div
        className="chart-container"
        style={{
          width: "100%",
          height: "120%",
          marginBottom: "-5%",
        }}
      >
        <ReactECharts
          id={{ type }}
          style={{
            height: "100%",
            width: "100%",
          }}
          option={{ ...newOptions }}
        />
        <div
          className="active-tag"
          style={{
            color: "var(--text-color)",
            fontSize: "15px",
            position: "absolute",
            bottom: "-5px",
            textAlign: "center",
            width: "100%",
          }}
        >
          {currentTag}
        </div>
      </div>
    </div>
  );
};
export default GaugeChart;

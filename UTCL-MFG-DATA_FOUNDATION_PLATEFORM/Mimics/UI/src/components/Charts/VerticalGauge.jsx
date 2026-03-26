import { calc } from "@chakra-ui/styled-system";
import React from "react";
import { useState } from "react";
import { colors } from "../../data/chartOpions/chatOptions";

const VerticalGauge = ({ options, unit }) => {
  const { series, max } = options;
  const selectedSeriesIndex = series.findIndex((s) => s.select);
  const selectedSeries = series[selectedSeriesIndex];
  selectedSeries.value = isFinite(selectedSeries.value)
    ? selectedSeries.value
    : 0;

  function getColorIndex(index) {
    return index % colors.length;
  }
  const [currentColor, setCurrentColor] = useState(
    colors[getColorIndex(selectedSeriesIndex)]
  );

  let [value, setValue] = useState(selectedSeries.value);
  const gaugeHeight = 100;
  const scaleUnitHeight = 10;
  const totalScaleUnits = gaugeHeight / scaleUnitHeight;

  const minGap = 50;
  // calculate gap according to max value and available heights
  const gap =
    Math.ceil(max / (gaugeHeight / scaleUnitHeight) / minGap) * minGap || 100;
  let markerPosition = value / gap;
  let [markerHeight, setMarkerHeight] = useState(
    markerPosition * scaleUnitHeight
  );

  function toggleSeries(i) {
    series.forEach((s) => (s.select = false));
    const newSeries = series[i];
    newSeries.select = true;
    value = isFinite(newSeries.value) ? newSeries.value : 0;
    markerPosition = value / gap;
    setMarkerHeight(markerPosition * scaleUnitHeight);
    setValue(value);
    setCurrentColor(colors[getColorIndex(i)]);
  }

  const scaleItems = [];
  let counter = 0;
  for (let i = 0; i < totalScaleUnits; i++) {
    scaleItems.push(
      <div
        key={i}
        style={{
          width: "30px",
          textAlign: "right",
          display: "flex",
          alignItems: "flex-end",
           color: "var(--card-subtle, gray)",
          height: `${scaleUnitHeight}%`,
        }}
        className="scale-item-vertical"
      >
        <span
          style={{
            position: "relative",
            bottom: `-8px`,
          }}
        >
          {counter}
        </span>
      </div>
    );

    if (selectedSeries.value < 0) {
      counter -= gap;
    } else {
      counter += gap;
    }
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
          }}
        ></span>
        <span>{s.name}</span>
      </div>
    );
  });

  return (
    <div
      className="vertical-gauge"
      style={{
        width: "fit-content",
        margin: "0 10px",
        display: "flex",
        width: "100%",
        height: "95%",
        maxHeight: `${gaugeHeight}%`,
        position: "relative",
      }}
      id="vertical-gauge"
    >
      <div
        style={{
          height: "100%",
          width: "55%",
          overflow: "auto",
          fontSize: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
        }}
        id="vertical-gauge"
      >
        {legends}
      </div>
      <div
        className="chart"
        style={{
          width: "40%",
          display: "flex",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "100%",
            display: "flex",
            marginRight: "25px",
            // bottom: `-${scaleUnitHeight / 2}px`,
            // position: "absolute",
            // left: "-40px",
            fontSize: "12px",
            flexDirection: "column-reverse",
          }}
          className="scale"
          id="vertical-gauge"
        >
          {scaleItems}
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "100%",
            backgroundColor: currentColor.light,
            borderRadius: "5px",
          }}
          id="vertical-gauge"
        >
          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              height: `${Math.abs(markerHeight)}%`,
              backgroundColor: currentColor.dark,
              borderRadius: "5px",
            }}
            className="gauge-marker"
            id="vertical-gauge"
          >
            <span
              style={{
                position: "absolute",
                top: `-20px`,
                transform: "translateY(50%)",
                left: "55px",
                fontWeight: "bold",
                fontSize: "12px",
                display: "flex",
                whiteSpace: "nowrap",
                 color: "var(--text-color)",
              }}
            >
              {value + " " + unit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalGauge;

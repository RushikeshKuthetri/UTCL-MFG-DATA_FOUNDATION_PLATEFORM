import { calc } from "@chakra-ui/styled-system";
import React from "react";
import { useState } from "react";
import { colors } from "../../data/chartOpions/chatOptions";

const HorizontalGauge = ({ options, unit }) => {
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
  const gaugeWidth = 100;
  const scaleUnitHeight = 10;
  const totalScaleUnits = Math.floor(gaugeWidth / scaleUnitHeight);
  const minGap = 50;
  // calculate gap according to max value and available heights
  const gap =
    Math.ceil(max / (gaugeWidth / scaleUnitHeight) / minGap) * minGap || 100; //calculate gap in multiple of 100
  // caclulate value percentage on totalScalUnits*100

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
          width: `${scaleUnitHeight}%`,

          color: "gray",
          // fontWeight: 500,
        }}
        className="scale-item vertical-text"
      >
        <span
          style={{
            position: "relative",
            left: "-8px",
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
          color: s.select ? "black" : "gray",
          display: "flex",
          gap: "7px",
          marginTop: "5px",
          cursor: "pointer",
          fontSize: "12px",
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
        <span style={{ textAlign: "center" }}>{s.name}</span>
      </div>
    );
  });

  return (
    <div
      className="horizontal-gauge"
      style={{
        width: "95%",
        maxWidth: `${gaugeWidth}%`,
        margin: "0 10px",
        display: "flex",
        flexDirection: "column",
        height: "95%",
        position: "relative",
        // overflowX: "hidden",
      }}
      id="horizontal-gauge"
    >
      <div
        style={{
          height: "fit-content",
          minHeight: "32%",
          maxWidth: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "row",
          // flexWrap: "wrap",
          gap: "5px",
        }}
        id="horizontal-gauge"
        className="legends"
      >
        {legends}
      </div>
      <div
        className="chart"
        style={{
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "45px",
            width: "100%",
            backgroundColor: currentColor.light,
            borderRadius: "5px",
          }}
          id="horizontal-gauge"
        >
          <div
            style={{
              position: "absolute",
              bottom: "0",
              height: "100%",
              width: `${Math.abs(markerHeight)}%`,
              backgroundColor: currentColor.dark,
              borderRadius: "5px",
            }}
            className="gauge-marker"
            id="horizontal-gauge"
          >
            <span
              style={{
                position: "absolute",
                right: "-57px",
                transform: "translateY(50%)",
                top: "-30px",
                fontWeight: "bold",
                fontSize: "12px",
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              {value + " " + unit}
            </span>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            marginRight: "10px",
            top: "25px",
            // left: "-10px",
            justifyContent: "flex-start",
            // position: "absolute",

            // marginTop: "10px",
            fontSize: "12px",
            flexDirection: "row",
          }}
          className="scale"
          id="horizontal-gauge"
        >
          {scaleItems}
        </div>
      </div>
    </div>
  );
};

export default HorizontalGauge;

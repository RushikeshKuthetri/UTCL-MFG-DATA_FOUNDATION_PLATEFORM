import { useState } from "react";
import { colors } from "../../data/chartOpions/chatOptions";

export const DetailsChart = ({ data, isGroupTags = false }) => {
  const { tagsUnit, tagsDescription } = data || {};
  const totalSeries = data.seriesData.length;
  const series = data.seriesData;
  const isGroupTag = isGroupTags;
  console.log("is group tag : ", isGroupTag);

  const [currentTagData, setCurrentData] = useState({
    name: data.seriesData[totalSeries - 1].name,
    data: data.seriesData[totalSeries - 1].data[
      data.seriesData[totalSeries - 1].data.length - 1
    ],
    description: tagsDescription[data.seriesData[totalSeries - 1].name],
    unit: tagsUnit[data.seriesData[totalSeries - 1].name],
  });
  function getColorIndex(index) {
    return index % colors.length;
  }

  function toggleSeries(i) {
    series.forEach((s) => (s.select = false));
    const newSeries = series[i];
    newSeries.select = true;
    let newData = newSeries.data[newSeries.data.length - 1];
    setCurrentData({
      name: newSeries.name,
      data: newData,
      description: tagsDescription[newSeries.name],
      unit: tagsUnit[newSeries.name],
    });
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
          gap: "2px",
          marginTop: "2px",
          cursor: "pointer",
          fontSize: "10px",
        }}
        onClick={() => toggleSeries(i)}
      >
        <span
          style={{
            height: "12px",
            width: "12px",
            borderRadius: "3px",
            backgroundColor: colors[getColorIndex(i)].dark,
            display: "block",
          }}
        ></span>
        <span style={{ textAlign: "center" }}>{s.name}</span>
      </div>
    );
  });

  return (
    <>
      {
        isGroupTags ? (
          <div className="details-chart">
            {/* <div className="details-chart-legends">{legends}</div> */}
            <div className="details-chart-body">
              <span className="details-chart-value">{currentTagData.data[1]}</span>
              <span className="details-chart-unit">{currentTagData.unit}</span>
              <span className="details-chart-unit">{currentTagData.DateTime}</span>
            </div>
            <div className="details-chart-head">
              <p className="details-chart-title">{currentTagData.name}</p>
              <p className="details-chart-description">{currentTagData.data[0]}</p>
              {/* <p className="details-chart-description">
                {currentTagData.description}
              </p> */}
            </div>
          </div>
        ) : (
          <div className="details-chart">
            <div className="details-chart-legends">{legends}</div>
            {/* <div className="details-chart-body">
              <span className="details-chart-value">{currentTagData.data[1]}</span>
              <span className="details-chart-unit">{currentTagData.unit}</span>
              <span className="details-chart-unit">{currentTagData.DateTime}</span>
            </div>
            <div className="details-chart-head">
              <p className="details-chart-title">{currentTagData.name}</p>
              <p className="details-chart-description">{currentTagData.data[0]}</p>
              <p className="details-chart-description">
                {currentTagData.description}
              </p>
            </div> */}

            <div className="flex items-center justify-center gap-2 mt-2 ">
              <span className="text-[22px] font-bold text-[var(--text-color)]">{currentTagData.data[1]}</span>
              <span className="text-[14px] text-[var(--text-color)]">{currentTagData.unit}</span>
              <span className="text-[13px] text-[var(--text-color)]">{currentTagData.DateTime} </span>
            </div>
            <div className="flex items-center justify-center flex-col gap-1 mt-2">
              <p className="text-base font-semibold text-[var(--text-color)]">
                {currentTagData.name}
              </p>
              <p className="text-sm text-[var(--text-color)] opacity-70">
                {currentTagData.data[0]}
              </p>
              <p className="text-sm text-[var(--text-color)] opacity-70">
                {currentTagData.description}
              </p>
            </div>

          </div>
        )
      }
    </>
  );
};
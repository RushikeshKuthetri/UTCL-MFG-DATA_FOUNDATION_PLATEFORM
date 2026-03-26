import { useSelector } from "react-redux";
import ReactECharts from "echarts-for-react";
import {
  chartOptions,
  colors,
  defaultGaugeSeriesOptions,
} from "../../data/chartOpions/chatOptions";
import { de } from "date-fns/locale";
import VerticalGauge from "./VerticalGauge";
import HorizontalGauge from "./HorizontalGauge";
import { TableChart } from "./TableChart";
import GaugeChart from "./GaugeChart";
import { DetailsChart } from "./DetailsChart";
export const VisualizationGraphs = ({ data, type, isGroupTags = false }) => {
  const { showPopup, filterData } = useSelector((state) => state);
  const { seriesData, tagsUnit, tagsDescription } = data || {
    seriesData: [],
    tagsUnit: {},
    tagsDescription: {},
  };

  const uniquetrendLabel = showPopup.xAxisData;

  const uniquetrendLabelLength = uniquetrendLabel?.length;

  function getColorIndex(index) {
    return index % colors.length;
  }
  function getMaxMin(increasedMax = false) {
    let maxValue = Number.NEGATIVE_INFINITY;
    let minValue = Number.MAX_VALUE;

    seriesData.forEach((series) => {
      const numericData = series.data
        .map((item) => item[1])
        .filter((item) => !isNaN(item) && item !== null);
      const max = Math.max(...numericData);
      const min = Math.min(...numericData);
      if (max > maxValue) {
        maxValue = max;
      }
      if (min < minValue) {
        minValue = min;
      }
    });

    // add 30 % to max value
    if (increasedMax) {
      maxValue = maxValue + maxValue * 0.3;
    }

    return { maxValue, minValue };
  }

  const createUnit = (unit) => {
    return unit ? `(${unit})` : "";
  };

  function convertToISO(dateStr) {
    // Example input: "30/05/2025, 01:03 pm"
    const [datePart, timePartRaw] = dateStr.split(", ");
    const [day, month, year] = datePart.split("/");
    const [time, meridian] = timePartRaw.split(" ");

    let [hours, minutes] = time.split(":").map(Number);
    if (meridian.toLowerCase() === "pm" && hours < 12) hours += 12;
    if (meridian.toLowerCase() === "am" && hours === 12) hours = 0;

    // Pad with leading zeros and build ISO string
    const isoString = `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:00`;

    return isoString;
  }

  function getOptions() {
    if (type === "gauge") {
      return getGaugeOptions();
    } else if (type == "vertical-gauge") {
      return getCustomGaugeOptions();
    }
    const defaultOptions = {
      ...chartOptions,
    };
    defaultOptions.series = [];
    seriesData.forEach((series, index) => {
      defaultOptions.series[index] = {};
      defaultOptions.series[index].type = type;
      if (type === "column") {
        defaultOptions.series[index].type = "bar";
      }

      defaultOptions.series[index].data = series.data;
      defaultOptions.series[index].data = series.data.map(
        ([dateStr, value]) => [convertToISO(dateStr), value]
      );
      defaultOptions.series[index].name = `${series.name} ${createUnit(
        tagsUnit[series.name]
      )}`;
    });

    const { maxValue, minValue } = getMaxMin();

    defaultOptions.yAxis.min = minValue;
    defaultOptions.yAxis.max = maxValue;
    // defaultOptions.yAxis.name =
    //   tagsUnit[seriesData[seriesData.length - 1].name];
    // defaultOptions.yAxis.nameGap = 30;
    // defaultOptions.yAxis.nameLocation = "center";
    defaultOptions.grid.top = `${Math.max(30 * (seriesData.length / 2), 28)}px`;
    console.debug("DEFAULT OPTIONS: ", defaultOptions);

    // console.log({ defaultOptions });
    return defaultOptions;
  }

  const getGaugeOptions = () => {
    const { maxValue, minValue } = getMaxMin(true);
    const series = [];
    const option = {
      grid: {
        left: "5px",
        right: "10px",
        bottom: "5px",
        top: "15px",
        containLabel: true,
      },
      tooltip: {
        show: true,
      },
      series: [],
    };

    seriesData.forEach((s, index) => {
      const seriesMax = Math.max(
        ...s.data.map((i) => i[1]).filter((i) => !isNaN(i) && i !== null),
        0
      );
      const colorIndex = getColorIndex(index);
      const mySeries = {
        ...defaultGaugeSeriesOptions,

        min: minValue,
        max: maxValue,
        select: index == seriesData.length - 1 ? true : false,
        name: s.name,
        data: [
          {
            value: seriesMax,
          },
        ],
        itemStyle: {
          color: colors[colorIndex].dark,
        },
        pointer: {
          itemStyle: {
            color: colors[colorIndex].dark,
            borderColor: colors[colorIndex].dark,
          },
        },
        // radius: "150%",
        // center: ["50%", "50%"],
        // margin: 0,
        // padding: 0,
      };

      mySeries.detail.formatter = function (value) {
        return (
          "{value|" +
          value.toFixed(2) +
          " " +
          tagsUnit[seriesData[0].name] +
          "}"
        );
      };
      series.push(mySeries);
    });

    option.series = series;
    return option;
  };

  function getCustomGaugeOptions() {
    const { maxValue, minValue } = getMaxMin();

    const allSeries = [];

    seriesData.forEach((series, index) => {
      const mySeries = {
        name: series.name,
        value: Math.max(
          ...series.data.map((i) => i[1]).filter((i) => !isNaN(i) && i !== null)
        ),
        select: index == seriesData.length - 1 ? true : false, //for last series make selet true
      };

      allSeries.push(mySeries);
    });
    const options = {
      max: maxValue,
      series: allSeries,
    };

    // console.log({ options });
    return options;
  }

  // console.log({ data });

  return (
    <div id="graph-div" className="graph-div graph-inner-container">
      {uniquetrendLabel && (
        <>
          {/* if type is vertical-gauge show VerticalGauge component */}

          {/* if type is horizontal-gauge show HorizontalGauge component */}

          {/* else show ReactECharts */}

          {type === "vertical-gauge" ? (
            <VerticalGauge
              options={getCustomGaugeOptions()}
              unit={tagsUnit[seriesData[0].name]}
            />
          ) : type === "horizontal-gauge" ? (
            <HorizontalGauge
              options={getCustomGaugeOptions()}
              unit={tagsUnit[seriesData[0].name]}
            />
          ) : type === "table-chart" ? (
            <TableChart data={data}></TableChart>
          ) : type === "gauge" ? (
            <GaugeChart options={{ ...getOptions() }} />
          ) : type === "details" ? (
            <DetailsChart data={data} isGroupTags={isGroupTags} />
          ) : (
            <ReactECharts
              id={{ type }}
              style={{
                height: "100%",
                width: "100%",
              }}
              option={{ ...getOptions() }}
            />
          )}

          {/* <HighchartsReact
            highcharts={Highcharts}
            options={options}
            containerProps={{ style: { height: "150px" } }}
          /> */}
          {/* <div className="x-axis">
            <span>{uniquetrendLabel[0]}</span>{" "}
            
            <span>{uniquetrendLabel[uniquetrendLabelLength - 1]}</span>
          </div> */}
        </>
      )}
    </div>
  );
};

import { useSelector } from "react-redux";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
 
import { getNumberOfDays } from "../../../utils/getNumberofDays";
import "./Graph.css";
// import dummy from '../../../trndxresponse.json'
 
import { MinMaxTable } from "./MinMaxTable";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
// import dummy2 from "../../../multitaggraphresdummy.json"
export const HighchartsGraph = () => {
 
  const { showPopup } = useSelector((state) => state);
  // console.log('---sss---',showPopup)
  const [openMinMaxTable, setOpenMinMaxTable] = useState(false);
  let seriesData = showPopup.popupData;//dummy.seriesData//
  const updatedSeriesData = seriesData.map((data, index) => {
    return {
      ...data,
      yAxis: index,
      style: {
        color: Highcharts.getOptions().colors[index],
      },
    };
  });
 
  const dynamicYAxis = seriesData.map((data, index) => {
    return {
      labels: {
        format: "{value}",
        style: {
          color: Highcharts.getOptions().colors[index],
        },
      },
      title: {
        text: "",
        style: {
          color: Highcharts.getOptions().colors[index],
        },
      },
      opposite: index % 2 !== 0 ? true : false,
    };
  });
  const uniquetrendLabel = showPopup.xAxisData;//dummy2.uniqueDataDateTime
  const options = {
    chart: {
      // width: window.innerWidth,
      height: openMinMaxTable
        ? window.innerHeight / 2
        : window.innerHeight / 1.45,
      type: "line",
      spacingRight: 5,
      spacingLeft: 5,
      zoomType: 'xy',
        resetZoomButton: {
          position: {
            align: 'right',
            verticalAlign: 'top',
          },
          theme: {
            tooltip: {
              enabled: false,
            },
          },
          relativeTo: 'chart',
        },
    },
    yAxis: dynamicYAxis,
    series: updatedSeriesData,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "center",
            },
          },
        },
      ],
    },
    plotOptions: {
      series: {
        animation: false,
        showInLegend: true,
        allowPointSelect: true,
        gapSize: 2,
        turboThreshold: 0,
        marker: {
          states: {
            hover: {
              fillColor: "red",
              lineWidth: 0,
            },
            select: {
              color: "red",
              fillColor: "green",
            },
          },
        },
      },
    },
 
    xAxis: {
      ordinal: true,
      categories: uniquetrendLabel,
      labels: {
        style: {
          // color: "grey",
          display: "none",
          position: "relative",
        },
      },
      tickInterval: 1,
      title: {
        text: "        ",
      },
      tickLength: 0,
    },
    rangeSelector: {
      enabled: false,
    },
 
    navigator: {
      xAxis: {
        categories: uniquetrendLabel,
        labels: {
          style: {
            // color: "grey",
            // fontSize: "7px",
          },
        },
        tickInterval: 10,
        uniqueNames: true,
        handles: {
          backgroundColor: "white",
          borderColor: "grey",
          radius: 8,
          innerLines: {
            color: "blue",
            height: 6,
          },
        },
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "top",
      borderWidth: 0,
    },
    credits: {
      enabled: false,
    },
    scrollbar: {
      barBackgroundColor: "#346667",
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: "gray",
      buttonBorderWidth: 0,
      buttonBorderRadius: 7,
      trackBorderWidth: 1,
      trackBorderRadius: 8,
      trackBorderColor: "#CCC",
    },
  };
 
  const uniquetrendLabelLength = uniquetrendLabel?.length;
 
  return (
    <div id="graph-div" className="graph-div w-100 px-2">
      {uniquetrendLabel && (
        <>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header
                onClick={() => setOpenMinMaxTable(!openMinMaxTable)}
              >
                <span>Click here to see details</span>
                <i className="fa-solid fa-angle-down"></i>
              </Accordion.Header>
              <Accordion.Body>
                <MinMaxTable />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <div className="x-axis">
            <span>{uniquetrendLabel[0]}</span>
            <span>
              
              { getNumberOfDays({
                // endDate: filterData.endDate,
                // startDate: filterData.startDate,
                endDate: uniquetrendLabel[uniquetrendLabelLength - 1],
                startDate: uniquetrendLabel[0],
              })}
            </span>
            <span>{uniquetrendLabel[uniquetrendLabelLength - 1]}</span>
          </div>
        </>
      )}
    </div>
  );
};
import { Table } from "react-bootstrap";
import ReactECharts from "echarts-for-react";
// import { useSelector } from "react-redux";

// import { useLatestData } from "../../utils/custom hooks/useLatestData";

export const TableChart = ({ data }) => {
  const { seriesData, tagsUnit, tagsDescription } = data || {
    seriesData: [],
    tagsUnit: {},
    tagsDescription: {},
  };

  console.debug("Data in table : ", data);

  const columns = [
    {
      title: "Tag Name",
      field: "TagName",
      key: "1",
    },
    {
      title: "Description",
      field: "Description",
      key: "2",
    },
    {
      title: "Value",
      field: "Value",
      key: "3",
    },
    {
      title: "Unit",
      field: "Unit",
      key: "4",
    },

    {
      title: "Trend",
      field: "trend",
      key: "5",
    },
    {
      title: "Min",
      field: "Min",
      key: "6",
    },
    {
      title: "Max",
      field: "Max",
      key: "7",
    },
  ];

  const HeaderRender = (columns) => {
    return (
      <thead>
        <tr>
          {columns.map((val, index) => {
            if (val.title === "Actions") {
              return (
                <th style={{ textAlign: "center" }} key={index}>
                  {val.title}
                </th>
              );
            }
            return <th key={index}>{val.title}</th>;
          })}
        </tr>
      </thead>
    );
  };

  const viewTable = (data) => {
    return (
      <tbody>
        {data.map((val, index) => {
          return (
            <tr key={index}>
              {columns.map((v1, i1) => {
                if (v1?.renderer) {
                  return v1.renderer(val, i1);
                } else {
                  return <td key={i1}>{val[v1.field]}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };

  function getTrend(data) {
    const option = {
      xAxis: {
        show: false,
        data: [...Array(data.length).keys()],
      },
      yAxis: {
        show: false,
      },
      grid: {
        left: "7px",
        right: 0,
        top: "5px",
        bottom: 0,
      },
      width: "90px",
      height: "50px",
      series: [
        {
          symbol: "none",
          data,
          type: "line",
        },
      ],
    };
    console.debug(option);
    return (
      <ReactECharts
        style={{ height: "50px", width: "100px" }}
        option={option}
      />
    );
  }

  function getTableData() {
    let tableData = [];
    if (seriesData && seriesData.length) {
      seriesData.forEach((element) => {
        console.debug("ELEMETN : ", element);
        console.debug("TAG DESCRIPTION : ", tagsDescription);
        console.debug("TAG UNIT : ", tagsUnit);
        // console.log({ element });
        tableData.push({
          TagName: element.name,
          Description: tagsDescription[element.name],
          Value: element.data[element.data.length - 1][1],
          Unit: tagsUnit[element.name],
          trend: getTrend(element.data.map((i) => i[1])),
          Min: Math.min(...element.data.map((i) => i[1])),
          Max: Math.max(...element.data.map((i) => i[1])),
        });
      });
    }
    return tableData;
  }

  return (
    <div className="table-chart-wrapper">
      <Table responsive="sm">
        {HeaderRender(columns)}
        {viewTable(getTableData())}
      </Table>
    </div>
  );
};

import { AiOutlineBarChart, AiOutlineDotChart, AiOutlineLineChart } from "react-icons/ai";
import { BiTable, BiTachometer, BiDetail, BiRuler } from "react-icons/bi";

export const chartOptions = {
  legend: {
    show: true
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 1,
    textStyle: {
      color: '#000000'
    },

    emphasis: {
      itemStyle: {
        color: 'red',
        borderColor: 'red',
      }

    },
  },

  grid: {
    left: '20px',
    right: '10px',
    bottom: '5px',
    top: '25px',
    containLabel: true,
  },
  xAxis: {
    type: 'time',
    axisLabel: {
      show: true,
      rotate: 45,
      formatter: function (label, index) {
        const date = new Date(label);
        console.debug("label: ",label,date);
        const formattedLabel = `${date.getDate()}-${(date.getMonth() + 1)} ${date.getHours()}:${date.getMinutes()}`;
        //  const formattedLabel = `${date.toLocaleString()}`;

        return formattedLabel;
      },
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    z: 10,
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: '#999',
    },
  },
  series: [
    {
      data: [],
      type: '',
    },
  ],
}

export const defaultGaugeSeriesOptions = {
  type: "gauge",
  startAngle: 180,
  endAngle: 0,

  radius: "100%",
  splitNumber: 2,
  progress: {
    show: true,
    roundCap: true,
    width: 7,
  },
  pointer: {
    itemStyle: {
      color: 'red', // this is the fill color
      borderColor: 'red', // this is the needle color
      borderWidth: 2
    }
  },

  axisLine: {
    roundCap: true,
    lineStyle: {
      width: 7,
    },
  },
  axisTick: {
    show: true,
    splitNumber: 2,
    lineStyle: {
      width: 2,
      color: "#999",
    },
  },
  splitLine: {
    length: 12,
    lineStyle: {
      width: 3,
      color: "#999",
    },
  },
  axisLabel: {
    distance: 30,
    color: "#999",
    // fontSize: 14,
  },
  title: {
    show: false,
  },
  detail: {
    offsetCenter: [0, "35%"],
    valueAnimation: true,

    rich: {
      value: {
        fontSize: 18,
        fontWeight: "bolder",
        color: "#777",
      },
    },
  },
}

export const colors = [
  { dark: "#546ec9", light: "#eaeaf9" },
  { dark: "#9dd284", light: "#eaeaf9" },
  { dark: "#faca5f", light: "#eaeaf9" },
  { dark: "#ee6666", light: "#eaeaf9" },
  {
    dark: "#77c2df",
    light: "#eaeaf9",
  },
  {
    dark: "#42a577",
    light: "#eaeaf9",
  },
  // new colors
  {
    dark: "#fc8452",
    light: "#eaeaf9",
  },
  {
    dark: "#a16ab9",
    light: "#eaeaf9",
  },
  {
    dark: "#ea7ccc",
    light: "#eaeaf9",
  },
];


export const chartTypesMap = {
  column: "Column",
  line: "Line",
  scatter: "XY Plot",
  gauge: "Radial Gauge",
  "vertical-gauge": "Vertical Gauge",
  "horizontal-gauge": "Horizontal Gauge",
  "table-chart": "Table",
  details: "Details",
};

export const groupTagsCharts = ["details"]

const style = {
  transform: "rotate(-90deg)",
}
export const chartIconsMap = {
  Column: <AiOutlineBarChart/>,
  Line: <AiOutlineLineChart/>,
  "XY Plot": <AiOutlineDotChart/>,
  "Radial Gauge": <BiTachometer/>,
  "Vertical Gauge": <BiRuler style={style}/>,
  "Horizontal Gauge": <BiRuler/>,
  Table: <BiTable/>,
  Details: <BiDetail/>,
};
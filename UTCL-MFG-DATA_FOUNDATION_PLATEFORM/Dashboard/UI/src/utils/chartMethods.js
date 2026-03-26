// import Highcharts, { objectEach } from "highcharts";
// import exportingInit from 'highcharts/modules/exporting';
// exportingInit(Highcharts);
const previousColors = [];
export const createLineChart = (dailyUser) => {
  console.log(dailyUser);
  const res = dailyUser.map((item, index) => {
    const plantName = Object.keys(item)[0]; // Extracting the plant name
    // const color = getRandomColor(previousColors); // Use previousColors here
    // previousColors.push(color); // Add the generated color to the array
    return {
      type: "column",
      name: plantName,
      data: item[plantName].map((entry) => entry.Utilisation),
      // color: color,
    };
  });
  const xAxis = dailyUser[0][res[0].name].map((entry) => entry.Date);
  let series = res;

  const options = {
    chart: {
      type: "column",
      zooming: {
        type: "x",
      },
      height: 520,
      // height:420
    },
    title: {
      text: "Daily Utilization %",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      // type: "category",
      categories: xAxis,
      labels: {
        rotation: -45,
        style: {
          color: "#000",
        },
      },
    },
    yAxis: {
      title: {
        text: "Utilization %",
        style: {
          fontSize: "15px",
          color: "#000",
        },
      },
      labels: {
        style: {
          color: "#000",
        },
      },
      gridLineColor: "black",
      gridLineDashStyle: "ShortDash",
      // tickWidth: 1,
      // tickPixelInterval: 100,
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: true,
        },
      },
      line: {
        lineWidth: 3,
      },
    },
    legend: {
      itemStyle: {
        color: "#000",
      },
    },
    series: series,
    //   exporting: {
    //     enabled: true
    // }
  };

  return options;
};
function getRandomColor(previousColors) {
  let color;
  const colorChars = "0123456789ABCDEF";
  do {
    color = "#";
    // Generate a random color hex value
    for (let i = 0; i < 6; i++) {
      color += colorChars[Math.floor(Math.random() * 16)];
    }
  } while (previousColors.includes(color)); // Check if the color has been used before
  console.log(color);
  return color;
}

export const createBarChart = (monthlyData) => {
  const res = monthlyData.map((item, index) => {
    const plantName = Object.keys(item)[0]; // Extracting the plant name
    // const color = getRandomColor(previousColors); // Use previousColors here
    // previousColors.push(color);
    return {
      type: "column",
      name: plantName,
      data: item[plantName].map((entry) => entry.Utilisation),
      // color: color,
    };
  });
  const xAxis = monthlyData[0][res[0].name].map(
    (entry) => `${entry.Month}-${entry.Year}`
  );
  let series = res;
  const options = {
    chart: {
      type: "column",
      // width:1200,
      // height:400
      // backgroundColor: '#104957',
    },
    title: {
      text: "Monthly Utilization %",
      style: {
        color: "#000",
      },
    },
    xAxis: {
      categories: xAxis,
      labels: {
        style: {
          color: "#000",
        },
      },
    },
    yAxis: {
      title: {
        text: "Utilization %",
        style: {
          fontSize: "15px",
          color: "#000",
        },
      },
      labels: {
        style: {
          color: "#000",
        },
      },
      gridLineColor: "black",
      gridLineDashStyle: "ShortDash",
    },
    series: series,
    legend: {
      itemStyle: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#000",
      },
    },
  };
  return options;
};

export const getTableData = () => {
  const records = [
    // {
    //   id: 101,
    //   name: "Shashank",
    //   lname: "Varshney",
    // },
    // {
    //   id: 102,
    //   name: "Nikhil",
    //   lname: "Varshney",
    // },
    // {
    //   id: 103,
    //   name: "Aman",
    //   lname: "Varshney",
    // },
    // {
    //   id: 104,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 105,
    //   name: "Aja1y",
    //   lname: "Varshney",
    // },
    // {
    //   id: 105,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 106,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 107,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 108,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 109,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 110,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 111,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 112,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 113,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 114,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 115,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
    // {
    //   id: 116,
    //   name: "Ajay",
    //   lname: "Varshney",
    // },
  ];
  return records;
};

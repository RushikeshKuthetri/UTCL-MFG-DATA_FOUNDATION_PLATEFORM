export const getTrendsMinMaxData = (payload) => {
  return [
    {
      name: "Tag UID",
      dataArray: payload.map((data) => data["Tag UID"]),
    },
    {
      name: "Tag Description",
      dataArray: payload.map((data) => data.Description),
    },
    {
      name: "UOM",
      dataArray: payload.map((data) => data["Unit Of Measurement"]),
    },
    {
      name: "Min",
      dataArray: payload.map((data) => parseFloat(Number(data.Min).toFixed(2))),
    },
    {
      name: "Max",
      dataArray: payload.map((data) => parseFloat(Number(data.Max).toFixed(2))),
    },
    {
      name: "Mean",
      dataArray: payload.map((data) => parseFloat(Number(data.Mean).toFixed(2))),
    },
  ];
};

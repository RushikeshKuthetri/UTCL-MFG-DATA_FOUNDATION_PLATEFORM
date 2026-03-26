const { retry } = require("@azure/core-amqp");

const setCluster = (cluster) => {
  if (cluster === "N") {
    return "North";
  } else if (cluster === "S") {
    return "South";
  } else if (cluster === "E") {
    return "East";
  } else if (cluster === "W") {
    return "West";
  } else {
    return "NA";
  }
};
const setPlant = (plant) => {
  return plant.match(/[\d\.]+|\D+/g)[0];
};

const setSection = (section) => {
  const newSection = section.match(/[\d\.]+|\D+/g)[0];

  if (newSection === "CM") {
    return "Cement Mill";
  } else if (newSection === "KM") {
    return "Coal Mill";
  } else if (newSection === "RM") {
    return "Raw Mill";
  } else if (newSection === "PP") {
    return "Packing Plant";
  } else if (newSection === "CR") {
    return "Crusher";
  } else {
    return "NA";
  }
};
module.exports = {
  createTableObjects: (data) => {
    // N - NDCW1 - KM1 - S - PV - L41VM1ZZ1;
    // cluster:North
    // plant:NDCW
    // section:CoalMill
    // equipmentGroup:Mill
    // variableGroup:PV

    return data.map((singleData) => {
      const splittedData = singleData.DisplayName?.split("-", 6);
      // console.log(splittedData);

      return {
        cluster: setCluster(splittedData[0]),
        plant: setPlant(splittedData[1]),
        section: setSection(splittedData[2]),
        equipmentGroup: "Mill", // ["Dust Collector", "Fan", "Feeder", "Hydraulic System", "Mill", "Regulators", "Separators", "Storage"]
        variableGroup: splittedData[4],
        tagName: splittedData[5],
        value: singleData.Value.Value,
      };
    });
  },
  createTableObjectsADX: (data) => {
    // N - NDCW1 - KM1 - S - PV - L41VM1ZZ1;
    // cluster:North
    // plant:NDCW
    // section:CoalMill
    // equipmentGroup:Mill
    // variableGroup:PV

    return data.map((singleData) => {
      const splittedData = singleData.Id?.split("-", 6);
      // console.log(splittedData);

      return {
        cluster: setCluster(splittedData[0]),
        plant: setPlant(splittedData[1]),
        section: setSection(splittedData[2]),
        equipmentGroup: "Mill", // ["Dust Collector", "Fan", "Feeder", "Hydraulic System", "Mill", "Regulators", "Separators", "Storage"]
        variableGroup: splittedData[4],
        tagName: splittedData[5],
        value: singleData.Value,
      };
    });
  },
  createGraphObjects: (data) => {
    return data.map((singleData) => {
      const splittedData = singleData.Id?.split("-");

      let temp;
      if (splittedData.length === 6) {
        temp = splittedData[5];
      }
      if (splittedData.length === 7) {
        temp = splittedData[5] + "-" + splittedData[6];
      }

      return {
        tagName: temp,
        Date: singleData.Day,
        Value: singleData.DayAvgValue,
      };
    });
  },
};

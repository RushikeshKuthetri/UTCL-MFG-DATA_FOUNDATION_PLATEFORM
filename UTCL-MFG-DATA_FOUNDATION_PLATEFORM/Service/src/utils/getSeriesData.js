module.exports = {
  getSeriesDataOptimized: (tagNamesSelected, uniqueDataDateTime, temp, addDescription) => {
    const dataMap = {}; // Create a data map for efficient lookups

    for (const dataPoint of temp) {
      const key = `${dataPoint["Tag Name"]}-${dataPoint.DateTime}`;
      dataMap[key] = {
        DateTime: dataPoint.DateTime,
        Value: parseFloat(dataPoint.Hr_Avg).toFixed(2),
        Description: dataPoint.Description,
      };
    }

    return tagNamesSelected.map((tag) => {
      const dataArr = uniqueDataDateTime.map((dateTime) => {
        const key = `${tag}-${dateTime}`;
        if (dataMap[key]) {
          return [dateTime, +parseFloat(dataMap[key].Value).toFixed(2)];
        } else {
          return [dateTime, null];
        }
      });

      if (addDescription == true) {
        tagObj = temp?.find((obj) => obj["Tag Name"] === tag);
        return {
          data: dataArr,
          name: `${tag}${tagObj?.Description ? ", " + tagObj?.Description : ""}`,
          showInLegend: true,
          zIndex: 1,
        };
      } else {
        return {
          data: dataArr,
          name: tag,
          showInLegend: true,
          zIndex: 1,
        };
      }
    });
  },

  getSeriesData: (tagNamesSelected, uniqueDataDateTime, temp) => {
    // console.debug({ tagNamesSelected, temp2: temp });
    return tagNamesSelected?.map((tag) => {
      dataArr = uniqueDataDateTime?.map((dateTime) => {
        data = temp?.find((obj) => obj.DateTime === dateTime && obj["Tag Name"] === tag);
        // formattedDateTime = moment(dateTime).format("YYYY-MM-DD HH:mm")
        if (data === undefined) {
          return [dateTime, null];
        }
        let value = parseFloat(data?.Hr_Avg).toFixed(2);
        return [dateTime, parseFloat(value)];
      });
      // console.debug(dataArr);
      tagObj = temp?.find((obj) => obj["Tag Name"] === tag);
      return {
        data: dataArr,
        name: tag,
        showInLegend: true,
        zIndex: 1,
      };
    });
  },
};

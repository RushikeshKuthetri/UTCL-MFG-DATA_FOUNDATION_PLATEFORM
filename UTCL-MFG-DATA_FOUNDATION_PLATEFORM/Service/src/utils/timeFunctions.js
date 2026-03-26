const moment = require("moment/moment");

module.exports = {
  createUniqueTimeArray: (startDate, endDate, interval, timeFormat, type) => {
    uniqueDataDateTime = [startDate];
    var [intervalInt, intervalTime] = interval.match(/[\d\.]+|\D+/g);
    const timeDiff = moment(endDate) - moment(startDate);
    // console.log(intervalTime);
    if (intervalTime !== "m" && intervalTime !== "s" && intervalTime != "h") {
      // console.log("changing intervalTime");
      intervalTime = "m";
    }
    let TimeLimitCondition = moment.duration(1, intervalTime).asMilliseconds();
    // console.log({ intervalInt, timeDiff , min:timeDiff / 60000 + 1, iter :(timeDiff / 60000 + 1)/intervalInt });
    if (type === "utc") {
      // console.log("in utc");
      for (let i = 1; i < (timeDiff / TimeLimitCondition + 1) / intervalInt; i++) {
        newDate = moment(uniqueDataDateTime[i - 1])
          .utc()
          .add(intervalInt, intervalTime)
          .format();
        uniqueDataDateTime.push(newDate);
      }
    } else {
      // console.log("in other");
      for (let i = 1; i < (timeDiff / TimeLimitCondition + 1) / intervalInt; i++) {
        newDate = moment(uniqueDataDateTime[i - 1])
          .add(intervalInt, intervalTime)
          .format(timeFormat);
        uniqueDataDateTime.push(newDate);
      }
    }

    console.log(uniqueDataDateTime, "-----uniqueDataDateTime");

    return uniqueDataDateTime;
  },
  // createUniqueTimeArray: (startDate, endDate, interval, timeFormat) => {
  //   uniqueDataDateTime = [startDate];
  //   var [intervalInt, intervalTime] = interval.match(/[\d\.]+|\D+/g);
  //   const timeDiff = moment(endDate) - moment(startDate);
  //   console.log(intervalTime);
  //   if (intervalTime !== "m" && intervalTime !== "s") {
  //     console.log("changing intervalTime");
  //     intervalTime = "m";
  //   }
  //   let TimeLimitCondition = moment.duration(1, intervalTime).asMilliseconds();
  //   // console.log({ intervalInt, timeDiff , min:timeDiff / 60000 + 1, iter :(timeDiff / 60000 + 1)/intervalInt });
  //   for (let i = 1; i < (timeDiff / TimeLimitCondition + 1) / intervalInt; i++) {
  //     newDate = moment(uniqueDataDateTime[i - 1])
  //       .add(intervalInt, intervalTime)
  //       .format(timeFormat);
  //     uniqueDataDateTime.push(newDate);
  //   }

  //   console.log(uniqueDataDateTime, "-----uniqueDataDateTime");

  //   return uniqueDataDateTime;
  // },
};

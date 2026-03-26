function validateInterval(interval) {
  if (typeof interval !== "string") {
    return false;
  }

  var [intervalInt, intervalTime] = interval.match(/[\d\.]+|\D+/g);

  if (intervalTime !== "m" && intervalTime !== "s" && intervalTime !== "h" && intervalTime !== "d") {
    return false; // Invalid intervalTime
  }

  var intervalNumber = parseFloat(intervalInt);

  if (isNaN(intervalNumber) || intervalNumber < 1 || intervalNumber > 60) {
    return false; // Invalid intervalInt
  }

  return true; // Interval is valid
}

module.exports = validateInterval;

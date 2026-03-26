module.exports = {
  sGen: (stringArray) => {
    let tempSring = "";

    if (stringArray.constructor === Array) {
      stringArray?.forEach((i) => {
        if (i.length != 0) {
          tempSring = tempSring + i + ",";
        }
      });
    }
    return tempSring.substring(0, tempSring.length - 1);
  },
};

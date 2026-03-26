module.exports = {
  splitToArray: (str) => {
    let arr = [];
    if (str && str.length != 0) {
      arr = str.split(",").map((item) => item.trim());
    }
    return arr;
  },
};

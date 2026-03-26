export const minsIntervalOptions = () => {
  const numArray = [{ label: "1 min", value: "1m" }];
  for (var num = 2; num < 61; num++) {
    numArray.push({ label: `${num} mins`, value: `${num}m` });
  }
  // return numArray;
  return [
    { label: "Auto", value: "auto" },
    { label: "1 min", value: "1m" },
    { label: "15 min", value: "15m" },
    { label: "1 hour", value: "1h" },
    { label: "1 day", value: "1d" },
  ];
};

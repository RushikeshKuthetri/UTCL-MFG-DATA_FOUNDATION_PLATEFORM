function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export function convertMsToHM(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  seconds = seconds % 60;
  minutes = seconds >= 30 ? minutes + 1 : minutes;
  minutes = minutes % 60;
  hours = hours % 24;
  const showHour =
    padTo2Digits(hours) !== "00" ? `${padTo2Digits(hours)} H` : "";
  const showMinutes =
    padTo2Digits(minutes) !== "00" ? `${padTo2Digits(minutes)} M` : "";
  return showHour + " " + showMinutes;
}

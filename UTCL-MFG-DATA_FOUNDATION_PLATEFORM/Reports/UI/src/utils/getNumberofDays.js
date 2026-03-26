import { convertMsToHM } from "./convertMsToHM";

export const getNumberOfDays = (data) => {
  // console.log({ data });
  // console.log("startDate", new Date(data.startDate));
  // console.log("endDate", new Date(data.endDate));
  let finalStartDate = null;
  let finalEndDate = null;
  if (data && data.startDate && data.endDate) {
    finalStartDate = convertToParsableFormat(data.startDate);
    finalEndDate = convertToParsableFormat(data.endDate);
    // console.log({
    //   finalStartDate,
    //   finalEndDate,
    //   "new Date(finalStartDate)": new Date(finalStartDate),
    //   "new Date(finalEndDate)": new Date(finalEndDate),
    // });
  }
  const timeDiffernce =
    new Date(finalEndDate).getTime() - new Date(finalStartDate).getTime();
  const dayDifference = timeDiffernce / (1000 * 3600 * 24);

  const hoursData = convertMsToHM(timeDiffernce);

  const days =
    Math.floor(dayDifference) !== 0 ? `${Math.floor(dayDifference)} D` : "";

  const differnceData = `${days} ${hoursData}`;
  return differnceData;
};

const convertToParsableFormat = (dateStr) => {
  const [datePart, timePart] = dateStr.split(", "); // Split date and time
  const [day, month, year] = datePart.split("/").map(Number);
  let [time, modifier] = timePart.split(" "); // "11:57 AM" → ["11:57", "AM"]
  let [hours, minutes] = time.split(":").map(Number);

  // Convert 12-hour format to 24-hour format
  if (modifier.toLowerCase() === "pm" && hours !== 12) {
    hours += 12;
  } else if (modifier.toLowerCase() === "am" && hours === 12) {
    hours = 0;
  }

  // Convert to ISO-like format (YYYY-MM-DD HH:mm:ss)
  const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")} ${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:00`;

  return formattedDate;
};

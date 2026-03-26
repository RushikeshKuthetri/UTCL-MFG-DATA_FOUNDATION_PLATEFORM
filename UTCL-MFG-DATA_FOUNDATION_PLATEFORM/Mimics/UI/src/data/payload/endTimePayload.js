import moment from "moment";

export const timeDiffPayload = {
  secIntervalEndDate: moment(
    new Date(moment(new Date()).subtract(30, "minutes"))
  ).format("YYYY-MM-DDTHH:mm"),
  minIntervalEndDate: moment(
    new Date(moment(new Date()).subtract(1, "hour"))
  ).format("YYYY-MM-DDTHH:mm"),
};

export const endTimePayload = (startDate) => {
  return moment(new Date(moment(startDate).subtract(1, "hour"))).format(
        "YYYY-MM-DDTHH:mm"
      );
};

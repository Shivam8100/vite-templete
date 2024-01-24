import moment from "moment";

export const getFullDate = (timestamp) => {
  const dateObject = new Date(timestamp);
  const formattedDate = moment(dateObject).format("ddd MMM D YYYY h:mm:ss A");

  return timestamp ? formattedDate : "";
};

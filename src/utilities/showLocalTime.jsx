const moment = require("moment-timezone");

const getLocalTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export const showTime = (timestamp, checkTime) => {
  let localTime = moment.tz(timestamp, getLocalTimezone());
  let estTime = moment.tz(timestamp, "America/New_York");

  return checkTime ? estTime.format("h:mm a z") : localTime.format("h:mm a z");
};

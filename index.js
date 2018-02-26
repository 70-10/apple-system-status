const axios = require("axios");

module.exports = () => {
  return axios
    .get("https://www.apple.com/support/systemstatus/data/developer/system_status_en_US.js", {
      params: {
        callback: "jsonCallback",
        _: Date.now(),
      },
    })
    .then(res => jsonpParse(res.data).services.filter(hasEvent));
};

function hasEvent(service) {
  return service.events.length > 0;
}

function jsonpParse(jsonpStr) {
  try {
    return JSON.parse(jsonpStr);
  } catch (e) {
    const jsonStr = jsonpStr.substring(jsonpStr.indexOf("({") + 1, jsonpStr.indexOf("})") + 1);
    return JSON.parse(jsonStr);
  }
}

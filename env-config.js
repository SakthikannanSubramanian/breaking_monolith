const prod = process.env.NODE_ENV === "production";
module.exports = {
  "process.env.FE_URL": prod ? "/breaking_monolith" : ""
};

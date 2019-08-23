const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/test": { page: "/test" }
    };
  },
  assetPrefix: !debug
    ? "http://SakthikannanSubramanian.github.io/breaking_monolith/"
    : ""
};

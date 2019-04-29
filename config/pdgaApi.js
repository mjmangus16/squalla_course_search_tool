if (process.env.NODE_ENV === "production") {
  module.exports = require("./pdgaApi_prod");
} else {
  module.exports = require("./keys_dev");
}

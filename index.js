if (typeof window === "undefined") {
  module.exports = require("./fillRepeating-cjs");
} else {
  module.exports = require("./fillRepeating-iife");
}

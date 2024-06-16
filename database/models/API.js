const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    apiKey: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const API = model("api", schema);

module.exports = API;

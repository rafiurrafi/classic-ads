const mongoose = require("mongoose");

const safetyTipsSchema = new mongoose.Schema(

  {

    description: {

      type: String,

      required: true,

    },

  },

  { timestamps: true }

);

module.exports = mongoose.model("SafetyTips", safetyTipsSchema);

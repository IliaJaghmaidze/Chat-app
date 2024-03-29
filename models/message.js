const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Message", messageSchema);

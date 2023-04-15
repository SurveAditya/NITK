const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  sessionNotes: [{
    question: String,
    answer: String,
    activity: String,
    status: String,
  }]
});

module.exports = mongoose.model("Journal", journalSchema);
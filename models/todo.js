const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Todo = mongoose.model("Todo", todoSchema, "Todo");

module.exports = Todo;

const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = model("todo", todoSchema, "todos");

module.exports = Todo;

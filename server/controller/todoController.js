const Todo = require("../../database/models/todo");

const getTodo = async (req, res, next) => {
  try {
    const allTodo = await Todo.find();
    res.json(allTodo);
  } catch (error) {
    next(error);
  }
};

const createTodoList = async (req, res, next) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.json(newTodo);
  } catch {
    const error = new Error("Something error todo!!!");
    error.code = 400;
    next(error);
  }
};

module.exports = { getTodo, createTodoList };

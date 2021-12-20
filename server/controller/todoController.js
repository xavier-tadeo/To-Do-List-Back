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

const deleteTodoList = async (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  try {
    const delteTodo = await Todo.findByIdAndDelete(id);
    res.json({ id: delteTodo.id });
  } catch {
    const error = new Error("Something error todo!!!");
    error.code = 400;
    next(error);
  }
};
module.exports = { getTodo, createTodoList, deleteTodoList };

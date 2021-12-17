const Todo = require("../../database/models/todo");

const getTodo = async (req, res, next) => {
  console.log("holaaaaaaaaaaaaaa");
  try {
    const allTodo = await Todo.find();
    console.log(allTodo);
    res.json(allTodo);
  } catch (error) {
    next(error);
  }
};

module.exports = { getTodo };

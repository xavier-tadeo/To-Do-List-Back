const Todo = require("../../database/models/todo");

const getTodo = async (req, res, next) => {
  try {
    const allTuits = await Todo.find();
    res.json(allTuits);
  } catch (error) {
    next(error);
  }
};

module.export = getTodo;

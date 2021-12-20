const express = require("express");

const {
  getTodo,
  createTodoList,
  deleteTodoList,
} = require("../controller/todoController");

const router = express.Router();

router.get("/", getTodo);
router.post("/create", createTodoList);
router.delete("/delete/:id", deleteTodoList);

module.exports = router;

const express = require("express");

const { getTodo, createTodoList } = require("../controller/todoController");

const router = express.Router();

router.get("/", getTodo);
router.post("/create", createTodoList);

module.exports = router;

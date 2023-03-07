import express from "express";
import bodyParser from "body-parser";
import {
  getTodos,
  getActiveTodos,
  getCompletedTodos,
  getTodoWithId,
  addTodo,
  deleteTodo,
  deleteCompletedTodo,
  editTodo,
} from "../Controller/index";
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.delete("/:id", deleteTodo());
router.delete("/", deleteCompletedTodo());

router.get("/", getTodos());
router.get("/active", getActiveTodos());
router.get("/completed", getCompletedTodos());
router.get("/:id", getTodoWithId());
router.post("/", addTodo());
router.put("/:id", editTodo());

export default router;

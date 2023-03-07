import express, { Router } from "express";
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
const router: Router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", getTodos());
router.get("/active", getActiveTodos());
router.get("/completed", getCompletedTodos());
router.get("/:id", getTodoWithId());

router.post("/", addTodo());

router.delete("/:id", deleteTodo());
router.delete("/", deleteCompletedTodo());

router.put("/:id", editTodo());

export default router;

import express from "express";
import bodyParser from "body-parser";
import {
  getTodos,
  getActiveTodos,
  getCompletedTodos,
  addTodo,
  deleteTodo,
} from "../Controller/index";
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// app.get("/active", getRequestWithActive());
// app.get("/completed", getRequestWithCompleted());

// app.get("/:id", getRequestWithId());
// app.post("/", postRequest());

router.delete("/:id", deleteTodo());
// app.delete("/", deleteRequest());

// app.put("/:id", putRequest());
router.get("/", getTodos());
router.get("/active", getActiveTodos());
router.get("/completed", getCompletedTodos());
router.post("/", addTodo());

// router.put("/edit-todo/:id", updateTodo);

// router.delete("/delete-todo/:id", deleteTodo);

export default router;

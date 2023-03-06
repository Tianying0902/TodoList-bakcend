import express from "express";
import getTodos from "../Controller/index";
const router = express.Router();

// app.get("/active", getRequestWithActive());
// app.get("/completed", getRequestWithCompleted());

// app.get("/:id", getRequestWithId());
// app.post("/", postRequest());

// app.delete("/:id", deleteRequestWithId());
// app.delete("/", deleteRequest());

// app.put("/:id", putRequest());
router.get("/", getTodos());
// router.get("/active", get());
// router.get("/completed", getRequestWithCompleted());
// router.post("/add-todo", addTodo);

// router.put("/edit-todo/:id", updateTodo);

// router.delete("/delete-todo/:id", deleteTodo);

export default router;

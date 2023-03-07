import mySqlConnection from "../Model/todo";
import queryPromise from "../Model/promise";
import { Request, Response } from "express";
const getTodos = () => {
  return (_req: Request, res: Response) => {
    getData(res);
  };
};
async function getData(res: Response) {
  const selectAllTasks = "SELECT * from todo";
  try {
    const result = await queryPromise(selectAllTasks, mySqlConnection);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}
const getTodoWithId = () => {
  return (req: Request, res: Response) => {
    getCertainData(req, res);
  };
};
async function getCertainData(req: Request, res: Response) {
  let condition = req.params.id;
  const selectCertainTask = "SELECT * from todo where id = " + condition + "";
  try {
    const result = await queryPromise(selectCertainTask, mySqlConnection);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}
const getActiveTodos = () => {
  return (_req: Request, res: Response) => {
    getActiveData(res);
  };
};
async function getActiveData(res: Response) {
  const selectActiveTasks = "SELECT * from todo where completed = 0";
  try {
    const result = await queryPromise(selectActiveTasks, mySqlConnection);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}
const getCompletedTodos = () => {
  return (_req: Request, res: Response) => {
    getCompletedData(res);
  };
};
async function getCompletedData(res: Response) {
  const selectCompletedTasks = "SELECT * from todo where completed = 1";
  try {
    const result = await queryPromise(selectCompletedTasks, mySqlConnection);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}
const addTodo = () => {
  return (req: Request, res: Response) => {
    postData(req, res);
  };
};
async function postData(req: Request, res: Response) {
  const taskName = req.body.task;
  const taskDefault = false;
  const insertNewTask =
    "INSERT into todo(task, completed) VALUES ('" +
    taskName +
    "'," +
    taskDefault +
    ")";
  try {
    const result = await queryPromise(insertNewTask, mySqlConnection);
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}
const deleteTodo = () => {
  return (req: Request, res: Response) => {
    deleteData(req, res);
  };
};
async function deleteData(req: Request, res: Response) {
  let id = req.params.id;
  const deleteTask = "DELETE from todo where id = " + id + "";
  try {
    const result = await queryPromise(deleteTask, mySqlConnection);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
const deleteCompletedTodo = () => {
  return (_req: Request, res: Response) => {
    deleteCompletedData(res);
  };
};
async function deleteCompletedData(res: Response) {
  const deleteCompletedTasks = "DELETE from todo where completed = 1";
  try {
    const result = await queryPromise(deleteCompletedTasks, mySqlConnection);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}

const editTodo = () => {
  return (req: Request, res: Response) => {
    if (req.body.completed === 0 || req.body.completed === 1) {
      markData(req, res);
    } else {
      editData(req, res);
    }
  };
};
async function markData(req: Request, res: Response) {
  let condition = req.params.id;
  let status = req.body.completed;
  const updateTaskStatus =
    "UPDATE todo SET completed = " + status + " where id = " + condition + " ";
  try {
    const result = await queryPromise(updateTaskStatus, mySqlConnection);
    res.status(204).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}
async function editData(req: Request, res: Response) {
  let condition = req.params.id;
  let content = req.body.task;
  const updateTaskContent =
    "UPDATE todo SET task = '" + content + "' where id = " + condition + " ";
  try {
    const result = await queryPromise(updateTaskContent, mySqlConnection);
    res.status(205).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
}
export {
  getTodos,
  getActiveTodos,
  getCompletedTodos,
  getTodoWithId,
  addTodo,
  deleteTodo,
  deleteCompletedTodo,
  editTodo,
};

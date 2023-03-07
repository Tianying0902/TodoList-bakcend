import { Request, Response } from "express";
import {
  getData,
  getCertainData,
  getActiveData,
  getCompletedData,
  postData,
  editData,
  deleteCompletedData,
  deleteData,
  markData,
} from "../Services/userService";
const getTodos = () => {
  return (_req: Request, res: Response) => {
    getData(res);
  };
};

const getTodoWithId = () => {
  return (req: Request, res: Response) => {
    getCertainData(req, res);
  };
};

const getActiveTodos= () => {
  return (_req: Request, res: Response) => {
    getActiveData(res);
  };
};

const getCompletedTodos = () => {
  return (_req: Request, res: Response) => {
    getCompletedData(res);
  };
};

const addTodo = () => {
  return (req: Request, res: Response) => {
    postData(req, res);
  };
};

const deleteTodo = () => {
  return (req: Request, res: Response) => {
    deleteData(req, res);
  };
};

const deleteCompletedTodo = () => {
  return (_req: Request, res: Response) => {
    deleteCompletedData(res);
  };
};

const editTodo = () => {
  return (req: Request, res: Response) => {
    if (req.body.completed === 0 || req.body.completed === 1) {
      markData(req, res);
    } else {
      editData(req, res);
    }
  };
};

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

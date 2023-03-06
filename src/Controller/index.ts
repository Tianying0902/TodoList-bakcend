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
  //queryPromise -> async await
  //get data->send->catch
  try {
    const result = await queryPromise(selectAllTasks, mySqlConnection);
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
export { getTodos, getActiveTodos, getCompletedTodos };

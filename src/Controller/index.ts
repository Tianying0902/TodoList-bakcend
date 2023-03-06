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
export default getTodos;

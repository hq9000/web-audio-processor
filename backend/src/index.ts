import express from "express";
import { container } from "./dependency-injection/inversify.config";
import { TYPES } from "./dependency-injection/types";
import {
  TaskIdGeneratorInterface,
  TaskStorageInterface
} from "./dependency-injection/interfaces";
import { Task } from "./model/Task";

const app = express();

app.get("/", (req, res) => {
  console.log("preved");
  res.json({ 1: 2 });
});

app.get("/tasks/:id/status", (req, res) => {
  
});

app.get("/upload", (req, res) => {
  const idGen = container.get<TaskIdGeneratorInterface>(TYPES.taskIdGenerator);
  const taskStorage = container.get<TaskStorageInterface>(TYPES.taskStorage);
  const taskId: string = idGen.generateNewTaskId();

  const task: Task = new Task(taskId);

  taskStorage.save(task);

  res.status(200);
  res.json({ task_id: taskId });
});

app.listen(3000, () => {
  console.log("server is listeningddd");
});

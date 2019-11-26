import express from "express";
import { container } from "./dependency-injection/inversify.config";
import { TYPES } from "./dependency-injection/types";
import {
  ProcessLauncherInterface,
  TaskIdGeneratorInterface,
  TaskStorageInterface
} from "./dependency-injection/interfaces";
import { Task } from "./model/Task";
import multer from "multer";

const app = express();

// https://medium.com/@romerorickyio/file-uploads-with-express-js-4-0-30ff3a60f23f
const upload = multer({ dest: "/upload" });

app.get("/", (req, res) => {
  console.log("preved");
  res.json({ 1: 2 });
});

app.get("/tasks/:id/status", (req, res) => {

});

app.get("/upload", upload.single("sound_data"), (req, res) => {
  const idGen = container.get<TaskIdGeneratorInterface>(TYPES.taskIdGenerator);
  const taskStorage = container.get<TaskStorageInterface>(TYPES.taskStorage);
  const processLauncher: ProcessLauncherInterface = container.get<ProcessLauncherInterface>(TYPES.processLauncher);

  const taskId: string = idGen.generateNewTaskId();
  console.log(req.file);

  const task: Task = new Task(taskId);
  task.sourceFilePath = req.file.filename;

  taskStorage.save(task);
  task.workerPid = processLauncher.launch(task, "");

  res.status(200);
  res.json({ task_id: taskId });
});

app.listen(3000, () => {
  console.log("server is listeningddd");
});

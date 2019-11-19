import { Container } from "inversify";
import { TaskIdGenerator } from "./entities/TaskIdGenerator";
import { TaskStorage } from "./entities/TaskStorage";
import { TaskIdGeneratorInterface, TaskStorageInterface } from "./interfaces";
import { TYPES } from "./types";

const container = new Container();

container
  .bind<TaskIdGeneratorInterface>(TYPES.taskIdGenerator)
  .to(TaskIdGenerator)
  .inSingletonScope();
container.bind<TaskStorageInterface>(TYPES.taskStorage).to(TaskStorage)
  .inSingletonScope;

export { container };

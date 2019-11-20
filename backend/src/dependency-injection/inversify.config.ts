import { Container } from "inversify";
import { TaskIdGenerator } from "./entities/TaskIdGenerator";
import { TaskStorage } from "./entities/TaskStorage";
import { TaskIdGeneratorInterface, TaskStorageInterface, ProcessLauncherInterface } from "./interfaces";
import { TYPES } from "./types";
import { ProcessLauncher } from "./entities/ProcessLauncher";


const container = new Container();

container
  .bind<TaskIdGeneratorInterface>(TYPES.taskIdGenerator)
  .to(TaskIdGenerator)
  .inSingletonScope();

container.bind<TaskStorageInterface>(TYPES.taskStorage).to(TaskStorage)
  .inSingletonScope;

container.bind<ProcessLauncherInterface>(TYPES.processLauncher).to(ProcessLauncher)
  .inSingletonScope;

export { container };

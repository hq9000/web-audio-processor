import { Container } from "inversify";
import { TYPES } from "./types";
import { TaskIdGeneratorInterface } from "./interfaces";
import { TaskIdGenerator } from "./entities/TaskIdGenerator";

const container = new Container;
container.bind<TaskIdGeneratorInterface>(TYPES.taskIdGenerator).to(TaskIdGenerator).inSingletonScope();

export { container }
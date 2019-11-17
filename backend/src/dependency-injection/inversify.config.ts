import { Container } from "inversify";
import { TYPES } from "./types";
import { TaskIdGeneratorInterface } from "./interfaces";
import { TaskIdGenerator } from "./entities/TaskIdGenerator";

const myContainer = new Container;
myContainer.bind<TaskIdGeneratorInterface>(TYPES.taskIdGenerator).to(TaskIdGenerator).inSingletonScope();

export { myContainer }
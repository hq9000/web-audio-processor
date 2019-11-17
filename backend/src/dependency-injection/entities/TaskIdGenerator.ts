import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TaskIdGeneratorInterface } from "../interfaces";

@injectable()
export class TaskIdGenerator implements TaskIdGeneratorInterface {
    generateNewTaskId(): string {
        return 'abcd';
    }
}
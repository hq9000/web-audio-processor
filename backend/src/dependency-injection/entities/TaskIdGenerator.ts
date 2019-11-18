import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TaskIdGeneratorInterface } from "../interfaces";

@injectable()
export class TaskIdGenerator implements TaskIdGeneratorInterface {
    generateNewTaskId(): string {
        return makeId(13);
    }
}

function makeId(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i: number = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
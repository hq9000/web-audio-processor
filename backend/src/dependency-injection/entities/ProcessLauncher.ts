import { Task } from "../../model/Task";
import { spawn } from "child_process";
import { ProcessLauncherInterface } from "../interfaces";
import { injectable } from "inversify";

@injectable()
export class ProcessLauncher implements ProcessLauncherInterface {
  public launch(task: Task, apiRoot: string) {
    spawn("echo 123");
  }
}
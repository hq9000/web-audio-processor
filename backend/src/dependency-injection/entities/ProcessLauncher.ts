import { Task } from "../../model/Task";
import { spawn, exec, SpawnOptionsWithoutStdio } from "child_process";
import { ProcessLauncherInterface } from "../interfaces";
import { injectable } from "inversify";

@injectable()
export class ProcessLauncher implements ProcessLauncherInterface {
  public launch(
    task: Task,
    apiRoot: string
  ): number {
      const child = exec("ls -la");
      return child.pid;
  }
}

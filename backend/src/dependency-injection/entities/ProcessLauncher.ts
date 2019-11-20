import { Task } from "../../model/Task";
import { spawn, SpawnOptionsWithoutStdio } from "child_process";
import { ProcessLauncherInterface } from "../interfaces";
import { injectable } from "inversify";

@injectable()
export class ProcessLauncher implements ProcessLauncherInterface {
  public launch(
    task: Task,
    apiRoot: string
  ) {
    return new Promise<void>((resolve, reject) => {
      const child = spawn("pwd");
      child.on("exit", () => {
        console.log("exited");
        resolve();
      });
    });
  }
}

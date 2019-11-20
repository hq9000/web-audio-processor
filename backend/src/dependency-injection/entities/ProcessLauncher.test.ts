import { container } from "../inversify.config";
import { TYPES } from "../types";
import { ProcessLauncherInterface } from "../interfaces";
import { Task } from "../../model/Task";

test("basic", done => {
  const launcher: ProcessLauncherInterface = container.get<
    ProcessLauncherInterface
  >(TYPES.processLauncher);
  const task: Task = new Task("123");
  const apiRoot: string = "http://brm.com/api";

  launcher.launch(task, apiRoot).then(() => done());
});

import { container } from "../inversify.config";
import { TYPES } from "../types";
import { TaskStorageInterface } from "../interfaces";
import { Task } from "../../model/Task";

test("basic", () => {
  const storage: TaskStorageInterface = container.get(TYPES.taskStorage);

  debugger;

  expect(storage.count()).toEqual(0);

  const t1: Task = new Task("1");
  const t2: Task = new Task("2");
  const t3: Task = new Task("3");

  storage.save(t1);
  storage.save(t2);
  storage.save(t3);
  storage.save(t1);

  expect(storage.count()).toEqual(3);

  const foundTask1 = storage.getTaskById("1");
  expect(foundTask1.getId()).toEqual("1");

  storage.removeById("2");

  expect(storage.count()).toEqual(2);

});

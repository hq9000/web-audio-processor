import { TaskInterface, TaskStorageInterface } from "../interfaces";
import { injectable } from "inversify";

/**
 *
 */
@injectable()
export class TaskStorage implements TaskStorageInterface {

  private storage: TaskInterface[] = [];

  /**
   *
   * @param id
   */
  getTaskById(id: string): TaskInterface {
    const idx = this.findIndexById(id);

    if (typeof(idx) == "undefined") {
      throw new Error(`a task with id ${id} not found in the storage`);
    }

    return this.storage[idx];
  }

  /**
   *
   * @param task
   */
  save(task: TaskInterface): void {
    const idx = this.findIndexById(task.getId());

    if (typeof idx == "undefined") {
      this.storage.push(task);
    } else {
      this.storage[idx] = task;
    }
  }

  removeById(taskId: string): void {
    const idx = this.findIndexById(taskId);

    if (typeof idx == "undefined") {
      throw new Error();
    }

    this.storage.splice(idx, 1);
  }

  private findIndexById(taskId: string): number | undefined {
    
    const ids: string[] = this.storage.map((task: TaskInterface) => {
      return task.getId();
    });

    const idx1: number = ids.indexOf(taskId);
    const idx2: number = ids.lastIndexOf(taskId);

    if (idx1 === -1) {
      return undefined;
    }

    if (idx1 !== idx2) {
      throw new Error(`more than one item found  with id ${taskId}`);
    }

    return idx1;
  }

  count(): number {
    return this.storage.length;
  }

}

import { TaskInterface } from "../dependency-injection/interfaces";

export class Task implements TaskInterface {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }
}

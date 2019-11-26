import { TaskInterface } from "../dependency-injection/interfaces";

export class Task implements TaskInterface {
  get workerPid(): Number | null {
    return this._workerPid;
  }

  set workerPid(value: Number | null) {
    this._workerPid = value;
  }

  private readonly id: string;

  private _sourceFilePath: string|null = null;

  private _workerPid: Number|null = null;

  get sourceFilePath(): string|null {
    return this._sourceFilePath;
  }

  set sourceFilePath(value: string|null) {
    this._sourceFilePath = value;
  }


  constructor(id: string) {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }
}

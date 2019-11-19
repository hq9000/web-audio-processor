export interface TaskIdGeneratorInterface {
    generateNewTaskId(): string;
}

export interface TaskInterface {
    getId(): string;    
}

export interface TaskStorageInterface {
    getTaskById(id: string): TaskInterface;
    save(task: TaskInterface): void;
    count(): number;
    removeById(taskId: string): void;
}


export interface TaskIdGeneratorInterface {
    generateNewTaskId(): string;
}

export interface TaskInterface {
    getId(): string;    
    getAllStages(): string[];
    getCurrentStage(): string;
    getCompletenessForStage(stage: string): number;
}


export interface TaskStorageInterface {
    getTaskById(id: string): TaskInterface;
    save(task: TaskInterface): void;
}


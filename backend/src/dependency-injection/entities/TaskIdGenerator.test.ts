import { container } from '../inversify.config';
import { TaskIdGeneratorInterface } from '../interfaces';
import { TYPES } from '../types';

test('basic', () => {
    
   const generator: TaskIdGeneratorInterface = container.get<TaskIdGeneratorInterface>(TYPES.taskIdGenerator);
   const id1: string = generator.generateNewTaskId();
   const id2: string = generator.generateNewTaskId();

   expect(id1).not.toEqual(id2);
})
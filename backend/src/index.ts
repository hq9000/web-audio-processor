import express from 'express';
import { container } from './dependency-injection/inversify.config';
import { TYPES } from "./dependency-injection/types";
import { TaskIdGeneratorInterface } from "./dependency-injection/interfaces"

const app = express();

app.get('/', (req, res) => {
    console.log('preved');
    res.json({ 1: 2 });
});

app.get('/upload', (req, res) => {
   const idGen = container.get<TaskIdGeneratorInterface>(TYPES.taskIdGenerator); 
   const taskId: string  = idGen.generateNewTaskId();
   res.status(200);
   res.json({task_id: taskId});
});

app.listen(3000, ()=> { 
    console.log('server is listeningddd');
});



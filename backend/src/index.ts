import express from 'express';
import { myContainer } from './dependency-injection/inversify.config';
import { TYPES } from "./dependency-injection/types";
import { TaskIdGeneratorInterface } from "./dependency-injection/interfaces"

const app = express();

app.get('/', (req, res) => {
    res.json({ 1: 2 });
});

app.get('/upload', (req, res) => {
   const idGen = myContainer.get<TaskIdGeneratorInterface>(TYPES.taskIdGenerator); 
   const taskId: string  = idGen.generateNewTaskId();
   res.status(200);
   res.write(taskId)
});

app.listen(3000, ()=> { 
    console.log('server is listeningddd');
});



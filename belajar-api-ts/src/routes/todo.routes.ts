import { Router } from 'express';
import * as TodoController from '../controllers/todo.controller';

const router = Router();

router.post('/todos', TodoController.createTodo);
router.get('/todos', TodoController.getTodos);
router.get('/todos/:id', TodoController.getTodo);
router.put('/todos/:id', TodoController.updateTodo);
router.delete('/todos/:id', TodoController.deleteTodo);

export default router;
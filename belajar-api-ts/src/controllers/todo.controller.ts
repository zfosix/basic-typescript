import { Request, Response } from 'express';
import * as TodoModel from '../models/todo.model';
import { ITodo } from '../interfaces/todo.interface';

export const createTodo = (req: Request, res: Response): void => {
  try {
    const { title, description, completed = false } = req.body;
    if (!title) {
      res.status(400).json({ error: 'Title is required' });
      return;
    }
    
    const newTodo = TodoModel.createTodo({ title, description, completed });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTodos = (req: Request, res: Response): void => {
  try {
    const todos = TodoModel.getTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTodo = (req: Request, res: Response): void => {
  try {
    const id = parseInt( req.params.id );
    const todo = TodoModel.getTodoById(id);
    
    if (!todo) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }
    
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateTodo = (req: Request, res: Response): void => {
  try {
    const id = parseInt( req.params.id );
    const updatedTodo = TodoModel.updateTodo(id, req.body);
    
    if (!updatedTodo) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }
    
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteTodo = (req: Request, res: Response): void => {
  try {
    const id = parseInt( req.params.id );

    const isDeleted = TodoModel.deleteTodo(id);
    
    if (!isDeleted) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
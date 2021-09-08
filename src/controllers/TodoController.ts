import { Request, Response } from "express";
import Todo from "../models/Todo";

export const createTodo = async (req: Request, res: Response) => {
  let { todo, date } = req.body;
  try {
    let newTodo = await new Todo({ todo, date });
    newTodo.save();

    res.status(201).json({
      todo: newTodo,
      message: "Todo created successfully",
    });
  } catch (error) {
    console.log("Error Oqured");
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { todo, date } = req.body;
  const { todoId } = req.params;
  try {
    let updatedTodo = await Todo.findOneAndUpdate(
      { _id: todoId },
      { $set: { todo, date } },
      { new: true }
    );

    res.status(201).json({
      todo: updatedTodo,
      message: "Todo updated successfully",
    });
  } catch (error) {
    console.log("Error Oqured");
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { todoId } = req.params;
  try {
    const todo = await Todo.findOneAndDelete({ _id: todoId });
    res.status(201).json({
      todo,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.log("Error Oqured");
  }
};

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.status(201).json(todos);
  } catch (error) {
    console.log("Error Oqured");
  }
};

import express, { Router } from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/TodoController";

const router: Router = express.Router();

router.get("/todo", getTodos);
router.post("/todo", createTodo);
router.put("/todo/:todoId", updateTodo);
router.delete("/todo/:todoId", deleteTodo);

export default router;

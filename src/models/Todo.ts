import { Schema, model } from "mongoose";

interface TodoInterface {
  todo: string;
  date: string;
}

const todoSchema = new Schema<TodoInterface>({
  todo: { type: String, required: true },
  date: { type: String, default: "5" },
});

const Todo = model<TodoInterface>("Todo", todoSchema);
export default Todo;

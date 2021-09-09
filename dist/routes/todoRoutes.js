"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var TodoController_1 = require("../controllers/TodoController");
var router = express_1.default.Router();
router.get("/todo", TodoController_1.getTodos);
router.post("/todo", TodoController_1.createTodo);
router.put("/todo/:todoId", TodoController_1.updateTodo);
router.delete("/todo/:todoId", TodoController_1.deleteTodo);
exports.default = router;

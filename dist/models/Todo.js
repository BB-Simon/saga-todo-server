"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var todoSchema = new mongoose_1.Schema({
    todo: { type: String, required: true },
    date: { type: String, default: "5" },
});
var Todo = (0, mongoose_1.model)("Todo", todoSchema);
exports.default = Todo;

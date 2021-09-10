"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
var db_1 = __importDefault(require("./db"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.get("/", function (req, res) {
    res.send("Hello from Typescript");
});
var baseAPIPath = "/api/v1";
// todo APIs
app.use(baseAPIPath, todoRoutes_1.default);
// connect to MongoDB database
(0, db_1.default)();
var PORT = 5000;
app.listen(PORT, function () {
    console.log("App running on " + PORT);
});

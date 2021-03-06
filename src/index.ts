import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import todoRoutes from "./routes/todoRoutes";
import connectDB from "./db";

dotenv.config();

const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Typescript");
});

const baseAPIPath = "/api/v1";
// todo APIs
app.use(baseAPIPath, todoRoutes);

// connect to MongoDB database
connectDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});

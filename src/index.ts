import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Typescript");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on ${PORT} in ${process.env.NODE_ENV}`);
});

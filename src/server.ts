import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { logger } from "./utils";

dotenv.config();

const app: Express = express();
app.use(morgan("tiny"), express.json());
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    logger.info(`Server is running at https://localhost:${port}`);
});

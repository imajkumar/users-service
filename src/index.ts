import express, { Express, Request, Response } from "express";
import * as dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000; // Default to 3000 if PORT is not set



app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
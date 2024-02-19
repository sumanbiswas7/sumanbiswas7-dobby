import serverless from "serverless-http";
import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.route";

export const app = express();

app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
   res.json({
      working: true,
      message: `Hello World`,
      secret: `SECRET: ${process.env.SECRET} 🤫`,
   });
});

export const handler = serverless(app);

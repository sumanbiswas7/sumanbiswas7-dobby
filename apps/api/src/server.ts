import serverless from "serverless-http";
import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.route";
import mongoose from "mongoose";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
   res.json({
      working: true,
      message: `Hello World`,
      secret: `SECRET: ${process.env.SECRET} 🤫`,
   });
});

async function connectDB() {
   try {
      const MONGODB_URL = process.env.MONGODB_URL;
      if (!MONGODB_URL) throw new Error("No MONGODB_URL found in .env");
      await mongoose.connect(MONGODB_URL);
      console.log(`🍀 MongoDB Connected Successfully`);
   } catch (error) {
      console.log(error);
   }
}

connectDB();
export const handler = serverless(app);

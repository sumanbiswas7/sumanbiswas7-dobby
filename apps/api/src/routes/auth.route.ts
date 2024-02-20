import { Router } from "express";
import { login, signup } from "../controllers/auth.controller";

const route = Router();

route.post("/login", login);
route.post("/signup", signup);

export default route;

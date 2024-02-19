import { Router, Request, Response } from "express";
const route = Router();

route.get("/login", (req: Request, res: Response) => {
   res.json({ ok: true });
});

export default route;

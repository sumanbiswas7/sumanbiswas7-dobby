import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { HTTP_STATUS } from "types";
import { User } from "../models/user.model";
import jwt from "jsonwebtoken";

export async function login(req: Request, res: Response) {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         return res.status(HTTP_STATUS.BAD_REQUEST).json({ msg: "Email and Password is required" });
      }

      const existing_user: any = await User.find({ email });
      if (!existing_user) {
         return res.status(HTTP_STATUS.BAD_REQUEST).json({ msg: "No User found with this email" });
      }

      const pass_match = await bcrypt.compare(existing_user.password, password);
      if (pass_match === false) {
         return res.status(HTTP_STATUS.UNAUTHORIZED).json({ msg: "Given password is invalid" });
      }

      const new_token = await jwt.sign(
         {
            id: existing_user._id,
            email: existing_user.email,
         },
         process.env.JWT_SECRET,
         {
            expiresIn: "15d",
         }
      );

      res.status(HTTP_STATUS.CREATED).json({ token: new_token });
   } catch (error) {
      console.log(error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ msg: "Unable to login" });
   }
}

export async function signup(req: Request, res: Response) {
   try {
      const { name, password, email } = req.body;

      if (!name || !password || !email) {
         return res.status(HTTP_STATUS.BAD_REQUEST).json({ msg: "Name passowrd email is required" });
      }

      const hash_pass = await bcrypt.hash(password, 10);
      const new_user = new User({ name, password: hash_pass, email });
      await new_user.save();

      const new_token = await jwt.sign(
         {
            id: new_user._id,
            email: new_user.email,
         },
         process.env.JWT_SECRET,
         {
            expiresIn: "15d",
         }
      );

      return res
         .status(HTTP_STATUS.CREATED)
         .json({ msg: "User created successfully", user: new_user, token: new_token });
   } catch (error) {
      console.log(error);
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ msg: "Unable to login" });
   }
}

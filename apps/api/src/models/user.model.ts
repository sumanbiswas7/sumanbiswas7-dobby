import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      email: {
         unique: true,
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);

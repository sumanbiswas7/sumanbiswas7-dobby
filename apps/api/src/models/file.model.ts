import mongoose from "mongoose";

const FileSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
      },
      url: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

export const File = mongoose.model("File", FileSchema);

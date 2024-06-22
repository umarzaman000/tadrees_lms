import mongoose from "mongoose";
const textModal = new mongoose.Schema({
  lecture: "array",
});
export const text =
  mongoose.models.courses || mongoose.model("courses", textModal);

import mongoose from "mongoose";
const classesSchema = new mongoose.Schema({});
export const classes = mongoose.models.classes || mongoose.model("classes", classesSchema);

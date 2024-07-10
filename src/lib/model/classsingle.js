import mongoose from "mongoose";
const classsingleSchema = new mongoose.Schema({
    _id:"object"
});
export const classsingle = mongoose.models.classes || mongoose.model("classes", classsingleSchema);

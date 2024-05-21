import mongoose from "mongoose";
const coursesModal = new mongoose.Schema({
  lecture:"array",
});
export const courses = mongoose.models.courses || mongoose.model ("courses",coursesModal)

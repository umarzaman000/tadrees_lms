import mongoose from "mongoose";
const enrolledsModal = new mongoose.Schema({
  student_ids: "string",
});
export const enrolleds = mongoose.models.enrolleds || mongoose.model("enrolleds", enrolledsModal);

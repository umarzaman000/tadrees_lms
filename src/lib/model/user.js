import mongoose from "mongoose";
const usersschema = new mongoose.Schema({
  username: "string",
  password: "string",
});
export const user = mongoose.models.users || mongoose.model ("users", usersschema);


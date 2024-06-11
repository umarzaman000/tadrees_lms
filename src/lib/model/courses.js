import mongoose from "mongoose";

// Define the schema for the classes model
const coursesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  // Add more fields here as needed
  // fieldName: { type: Type, required: true }
});

// Create the model if it doesn't already exist
export const courses = mongoose.models.courses || mongoose.model("courses", coursesSchema);

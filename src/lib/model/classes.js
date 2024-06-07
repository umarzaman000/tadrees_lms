import mongoose from "mongoose";

// Define the schema for the classes model
const classesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  // Add more fields here as needed
  // fieldName: { type: Type, required: true }
});

// Create the model if it doesn't already exist
export const classes = mongoose.models.classes || mongoose.model("classes", classesSchema);


import { NextResponse } from "next/server";
import { courses } from "../../../lib/model/courses";
import mongoose from "mongoose";
import { ConnectionSrt } from "../../../lib/db";

let isConnected = false;

export async function GET() {
  if (!isConnected) {
    try {
      await mongoose.connect(ConnectionSrt);
      isConnected = true;
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection error:", error);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }
  }

  try {
    const data = await courses.find();
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}

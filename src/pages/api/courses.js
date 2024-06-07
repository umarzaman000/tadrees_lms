import { courses } from "../../lib/model/courses";
import mongoose from "mongoose";
import { ConnectionSrt } from "../../lib/db";

let isConnected = false;

async function handler(req, res) {
  if (req.method == "GET") {
    if (!isConnected) {
      try {
        await mongoose.connect(ConnectionSrt);
        isConnected = true;
        console.log("Database connected successfully");
      } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).send(
          { error: "Database connection failed" },
          { status: 500 }
        );
      }
    }

    try {
      const body =req.body;

      const data = await courses.find({user_id:req.query.id});
      console.log('data', data)
      res.status(200).send({success:true, data:data});
    } catch (error) {
      console.error("Error fetching data:", error);
      return res.status(500).send(
        { error: "Error fetching data" },
        { status: 500 }
      );
    }
  }
}
export default handler;

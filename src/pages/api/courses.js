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
      const body =req.query.courseId;
      console.log("llll",body)
      const data = await courses.findOne({_id:req.query.courseId});
      console.log('data', data)
      if (data) {
        res.status(200);
        res.send({ data });
        return;
      } else {
        res.status(400);
        res.send({ error: "user does not exist" });
      }
    } catch (erorr) {
      console.log(erorr);
      res.status(500);
      res.send({ error: "something went wrong" });
    }
  }
}
export default handler;

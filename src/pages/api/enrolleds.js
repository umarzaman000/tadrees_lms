import { enrolleds } from "../../lib/model/enrolleds";
import { classes } from "../../lib/model/classes";
import { courses } from "../../lib/model/courses";
import mongoose from "mongoose";
import { ConnectionSrt } from "../../lib/db";
import { objectIncludes } from "@tiptap/react";
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
        res
          .status(500)
          .send({ error: "Database connection failed" }, { status: 500 });
      }
    }
    try {
      const mongoose = require("mongoose");
      const userId = req.query.userId;
      const userData = await enrolleds
        .find({ student_ids: { $in: [userId] } })
        .lean();
      const [{ class_id: classId }] = userData;
      const ObjectId = mongoose.Types.ObjectId;
      const objectIdClassId = new ObjectId(classId);
      const classData = await classes.find({ _id: objectIdClassId }).lean();
      const courseId = classData.map((data) => data.course_id);
      const courseData = await courses.find({ _id: courseId }).lean();
      if (courseData) {
        res.status(200);
        res.send({ courseData });
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

import { text } from "../../lib/model/text";
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
      const lecture_no = "5";
      console.log("lecture_no", lecture_no);

      const lectureData = await text
        .find({lecture})
        .lean();
      console.log("lecturedata", lectureData);

      if (lectureData) {
        res.status(200);
        res.send({ lectureData });
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

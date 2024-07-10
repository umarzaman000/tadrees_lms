import { user } from "../../lib/model/user";
import mongoose from "mongoose";
import { ConnectionSrt } from "../../lib/db";
let isConnected = false;
async function handler(req, res) {
  if (req.method == "POST") {
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
      const body = req.body;
      const { username, password } = body;

      const userData = await user.findOne({
        username: username,
        password: password,
      });

      if (userData) {
        res.status(200);
        res.send({ userData });
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

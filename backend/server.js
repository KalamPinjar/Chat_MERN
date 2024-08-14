import express from "express";
import dotenv from "dotenv";
import authRoutes from "./route/auth.routes.js";
import userRoutes from "./route/user.routes.js";
import messageRoutes from "./route/message.routes.js";
import connectToMongoDB from "./db/connect.mongooseDB.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
  res.send("Hello User!!");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`The server is running on http://localhost:${PORT}`);
});

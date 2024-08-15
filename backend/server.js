import express from "express";
import dotenv from "dotenv";
import authRoutes from "./route/auth.routes.js";
import userRoutes from "./route/user.routes.js";
import messageRoutes from "./route/message.routes.js";
import connectToMongoDB from "./db/connect.mongooseDB.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend", "dist", "index.html"));
});


server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`The server is running on http://localhost:${PORT}`);
});

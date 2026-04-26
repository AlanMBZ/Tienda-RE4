// src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import weaponRoutes from "./routes/weapon.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/weapons", weaponRoutes);

app.listen(3000, () => console.log("Backend corriendo en puerto 3000"));
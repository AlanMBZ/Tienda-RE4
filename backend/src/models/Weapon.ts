import mongoose from "mongoose";

const weaponSchema = new mongoose.Schema({
  nombre: String,
  categoria: String,
  tipo: String,
  precio: Number,
  municion: String,
  stock: Number,
  imagen: String
}, {
  collection: "Productos" // 👈 ESTA LÍNEA ES LA CLAVE
});

export const Weapon = mongoose.model("Weapon", weaponSchema);

import { Router } from "express";
import { Weapon } from "../models/Weapon.js";

const router = Router();

// CREATE
router.post("/", async (req, res) => {
  const weapon = new Weapon(req.body);
  await weapon.save();
  res.json(weapon);
});

// READ
router.get("/", async (req, res) => {
  const weapons = await Weapon.find();
  res.json(weapons);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Weapon.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Weapon.findByIdAndDelete(req.params.id);
  res.json({ message: "Eliminado" });
});

export default router;
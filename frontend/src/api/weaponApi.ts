// src/api/weaponApi.ts
import axios from "axios";
import type { Weapon } from "../types/Weapon.js";

const API = "http://localhost:3000/api/weapons";

// READ
export const getWeapons = () => axios.get<Weapon[]>(API);

// CREATE
export const createWeapon = (data: Weapon) => axios.post<Weapon>(API, data);

// UPDATE
export const updateWeapon = (id: string, data: Weapon) =>
  axios.put<Weapon>(`${API}/${id}`, data);

// DELETE
export const deleteWeapon = (id: string) =>
  axios.delete<{ message: string }>(`${API}/${id}`);
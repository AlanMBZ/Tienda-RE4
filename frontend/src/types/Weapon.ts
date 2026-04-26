// src/types/Weapon.ts
export interface Weapon {
  _id?: string;
  nombre: string;
  categoria: string;
  tipo: string;
  precio: number;
  municion?: string;
  stock: number;
  imagen: string;
}
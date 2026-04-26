// src/components/WeaponForm.tsx
import { useState } from "react";
import { createWeapon } from "../api/weaponApi";

type Props = {
  reload: () => void;
};

export default function WeaponForm({ reload }: Props) {
  const [form, setForm] = useState({
    nombre: "",
    categoria: "",
    tipo: "",
    precio: 0,
    municion: "",
    stock: 0,
    imagen: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createWeapon(form);
    reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombre"
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
      />

      <input
        placeholder="Categoría"
        onChange={(e) => setForm({ ...form, categoria: e.target.value })}
      />

      <input
        placeholder="Tipo"
        onChange={(e) => setForm({ ...form, tipo: e.target.value })}
      />

      <input
        placeholder="Precio"
        type="number"
        onChange={(e) => setForm({ ...form, precio: +e.target.value })}
      />

      <input
        placeholder="Munición"
        onChange={(e) => setForm({ ...form, municion: e.target.value })}
      />

      <input
        placeholder="Stock"
        type="number"
        onChange={(e) => setForm({ ...form, stock: +e.target.value })}
      />

      <input
        placeholder="URL Imagen"
        onChange={(e) => setForm({ ...form, imagen: e.target.value })}
      />

      <button>Guardar</button>
    </form>
  );
}

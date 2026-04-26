// src/components/WeaponList.tsx
import { useEffect, useState } from "react";
import { getWeapons, deleteWeapon } from "../api/weaponApi";
import type { Weapon } from "../types/Weapon";

export default function WeaponList() {
  const [weapons, setWeapons] = useState<Weapon[]>([]);

  const loadWeapons = async () => {
    const res = await getWeapons();
    setWeapons(res.data);
  };

  useEffect(() => {
    const fetchWeapons = async () => {
      const res = await getWeapons();
      setWeapons(res.data);
    };

    fetchWeapons();
  }, []);

  return (
    <div>
      <h2>Armas</h2>
      {weapons.map((w) => (
        <div key={w._id}>
          <h3>{w.nombre}</h3>
          <p>PRECIO: ${w.precio}</p>
          <p>CATEGORIA: {w.categoria}</p>
          <p>TIPO: {w.tipo}</p>
          <p>MUNICION: {w.municion}</p>
          <p>DISPONIBLE: {w.stock}</p>
          

          <img src={w.imagen} alt={w.nombre} width="150" />
          <br />
          <button onClick={() => deleteWeapon(w._id!).then(loadWeapons)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

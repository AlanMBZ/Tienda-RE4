// src/components/WeaponList.tsx
import { deleteWeapon } from "../api/weaponApi";
import type { Weapon } from "../types/Weapon";

type Props = {
  weapons: Weapon[];
  reload: () => void;
};

export default function WeaponList({ weapons, reload }: Props) {

  const handleDelete = async (id: string) => {
    await deleteWeapon(id);
    reload(); // recarga desde App
  };

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

          <button onClick={() => handleDelete(w._id!)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}
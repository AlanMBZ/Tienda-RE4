import { useEffect, useState } from "react";
import WeaponList from "./components/WeaponList";
import WeaponForm from "./components/WeaponForm";
import { getWeapons } from "./api/weaponApi";
import type { Weapon } from "./types/Weapon";

function App() {
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
      <h1>Tienda RE4</h1>

      <WeaponForm reload={loadWeapons} />
      <WeaponList weapons={weapons} reload={loadWeapons} />
    </div>
  );
}

export default App;

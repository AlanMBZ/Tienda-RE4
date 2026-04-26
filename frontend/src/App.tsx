import WeaponList from "./components/WeaponList";
import WeaponForm from "./components/WeaponForm";
import { useRef } from "react";

function App() {
  const ref = useRef<any>();

  return (
    <div>
      <h1>Tienda RE4</h1>
      <WeaponForm reload={() => ref.current()} />
      <WeaponList ref={ref} />
    </div>
  );
}

export default App;
import { BiografiaCom } from "../Components/BiografiaCom" 
import { Content } from "../Components/Content"
import { Navbar } from "../Components/Navbar"
import { Taller } from "../Pages/Taller"
import { Tecnologia } from "../Pages/Tecnologia"
import { Practica } from "../Pages/Practica"

import { useState } from "react";

export const Biografia = () => {
  const [selectedMateria, setSelectedMateria] = useState("Taller");

  const handleMaterias = (materia) => {
    setSelectedMateria(materia);
    console.log(`Cambiando a ${materia}`);
  };

  return (
    <>
      <div className="biografia-container">
        <Navbar />
        <Content handleMaterias={handleMaterias} />
        <BiografiaCom handleMaterias={handleMaterias} />
        {selectedMateria === "Taller" && <Taller />}
        {selectedMateria === "Tecnología" && <Tecnologia />}
        {selectedMateria === "Practica" && <Practica />}
      </div>
    </>
  );
};
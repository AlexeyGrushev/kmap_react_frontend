import React, { useState } from "react";
import solveMap from "./requests/solveMap";

import { Header } from "./modules/header";
import KarnaughMap from "./modules/pageRender";
import { UserInput } from "./modules/userInput";

export const MainPage = () => {
  const [data, setData] = useState(null);

  const handleSolve = async (vector) => {
    try {
      const result = await solveMap(vector);
      setData(result);
      try {
        if (result.error) {
          alert(`Ошибка: ${result.error}`);
          return ;
        }
      } catch {
        {}
      }
    } catch (error) {
      console.error("Ошибка при решении:", error);
    }
  };

  return (
    <>
      <Header />
      <UserInput onSolve={handleSolve} />
      {data && <KarnaughMap data={data} />}
    </>
  );
};
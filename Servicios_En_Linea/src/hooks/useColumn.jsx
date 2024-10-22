import { useState } from "react";
export const UseColumn = (columnas) => {
  const [state, setstate] = useState(columnas);
  return [state];
};

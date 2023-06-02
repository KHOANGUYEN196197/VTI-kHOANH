import { createContext, useState } from "react";

export const LightContext = createContext({});
export const LightProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    console.log(111111);
    setToggle(!toggle);
  };
  return (
    <LightContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </LightContext.Provider>
  );
};

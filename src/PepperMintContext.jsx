import { createContext, useState } from "react";

export const PeppermintContext = createContext();

export const PeppermintProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("ObstacleStatus");

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const value = {
    handleClick,
    activeComponent,
  };

  return (
    <PeppermintContext.Provider value={value}>
      {children}
    </PeppermintContext.Provider>
  );
};

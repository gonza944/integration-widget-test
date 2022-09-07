import React, { createContext } from "react";

const initialValue = { backgroundColor: "#F7F4EF", buttonColor: "#fdc831" };

// Context
export const configContext = createContext<{
  backgroundColor: string;
  buttonColor: string;
}>(initialValue);

declare global {
  interface Window {
    navBar: { options: { backgroundColor: string; buttonColor: string } };
  }
}

export const ConfigurationContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <configContext.Provider
      value={window.navBar.options ? window.navBar.options : initialValue}>
      {children}
    </configContext.Provider>
  );
};

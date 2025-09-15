import { createContext, useContext, useRef } from "react";

const TransitionContext = createContext(null);

export const TransitionProvider = ({ children }) => {
  const transitionRef = useRef(null);
  return (
    <TransitionContext.Provider value={{ transitionRef }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "useTransitionContext must be used within a TransitionProvider"
    );
  }
  return context;
};

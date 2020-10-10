import React, { createContext, useReducer } from "react";
import { reducer, IAction } from "./Test";

export interface ITest {
  color: string;
  dispatch?: React.Dispatch<IAction>;
}

export const ColorContext = createContext<ITest>({ color: "blue" });

export const Color = function (props: any) {
  const [color, dispatch] = useReducer(reducer, "blue");
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};

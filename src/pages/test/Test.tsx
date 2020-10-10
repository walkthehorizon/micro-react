import React, { useContext, useState, useEffect } from "react";
import { Color, ColorContext } from "./Color";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

// function Test() {
//   return (
//     <div>
//       <Color>
//         <ShowArea />
//         <Buttons />
//       </Color>
//     </div>
//   );
// }

export interface IAction {
  type: string;
  color: string;
}

export const reducer = (state: string, action: IAction) => {
  switch (action.type) {
    case "update":
      return action.color;
    default:
      return state;
  }
};

function ShowArea() {
  const { color } = useContext(ColorContext);
  return <div style={{ color: color }}>字体颜色为blue</div>;
}

function Buttons() {
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <button
        onClick={() => {
          if (dispatch != null && dispatch !== undefined)
            dispatch({ type: "update", color: "red" });
        }}
      >
        红色
      </button>
      <button
        onClick={() => {
          if (dispatch != null && dispatch !== undefined)
            dispatch({ type: "update", color: "yellow" });
        }}
      >
        黄色
      </button>
    </div>
  );
}

function Test() {
  let history = useHistory();

  useEffect(() => {
    console.log("xxx进入聊天室");
    return () => {
      console.log("xxx离开聊天室");
    };
  });

  return (
    <Button
      onClick={() => {
        history.push("/download");
      }}
    >
      click
    </Button>
  );
}

export default Test;

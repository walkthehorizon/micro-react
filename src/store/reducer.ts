import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from "./actionType";

const dState = {
  input: "张三丰",
  age: ["23", "24", "25"],
};
export interface dState {
  input: string;
  age: Array<string>;
}

export default (state = dState, action: any) => {
  console.log(state, action);
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.input = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.age.push(state.input);
    newState.input = "";
    return newState;
  }
  if (action.type === DEL_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    const index = newState.age.indexOf(newState.input);
    console.log(index);
    if (index > -1) {
      newState.age.splice(index, 1);
    }
    newState.input = "";
    return newState;
  }
  return state;
};

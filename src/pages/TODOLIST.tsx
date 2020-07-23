import React, { Component, ChangeEvent } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "../store";
import { dState } from "../store/reducer";
import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM } from "../store/actionType";

class TodoList extends Component<any, dState> {
  inputValue: string = "";

  constructor(props: any) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.storeChange); //订阅Redux的状态
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            // placeholder={this.state.input}
            value={this.state.input}
            style={{ width: "250px", marginRight: "10px" }}
            onChange={this.changeInputValue}
          />
          <Button type="primary" onClick={this.addItem}>
            增加
          </Button>
          <Button type="primary" onClick={this.delItem}>
            删除
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            //关键代码-----------start
            dataSource={this.state.age}
            //关键代码-----------end
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }

  changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const action = {
      type: CHANGE_INPUT,
      value: e.target.value,
    };
    store.dispatch(action);
  };

  addItem = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const action = {
      type: ADD_ITEM,
    };
    store.dispatch(action);
  };

  delItem = () => {
    store.dispatch({ type: DEL_ITEM });
  };

  storeChange = () => {
    this.setState(store.getState(), () => {
      console.error(this.state.input);
    });
  };
}
export default TodoList;

import React, { Component, ChangeEventHandler, ChangeEvent } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "../store";
import { dState } from "../store/reducer";


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
            placeholder={this.state.input}
            style={{ width: "250px", marginRight: "10px" }}
            onChange={this.changeInputValue}
          />
          <Button type="primary" onClick={this.addItem}>
            增加
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            //关键代码-----------start
            dataSource={this.state.age}
            //关键代码-----------end
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }

  changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const action = {
      type: "inputType",
      value: e.target.value
    };
    store.dispatch(action);
  };

  addItem = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const action = {
      type: "addItem"
    };
    store.dispatch(action);
  };

  storeChange = () => {
    this.setState(store.getState(), () => {
      console.error(this.state.input);
    });
  };
}
export default TodoList;

import React, { Component } from "react";
import { isMobile } from "../Util";
// import { isMobile } from "./../Util";

class Home extends Component<any,any> {
  constructor(props: Readonly<any>) {
    super(props);
    if(isMobile()){
        this.props.history.push("/m/download/");
    }else{
        this.props.history.push("/download/");
    }
  }

  render() {
    return (
        <div></div>
    );
  }
}

export default Home

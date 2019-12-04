import React, { Component } from "react";
import { link } from "fs";
import { Link } from "react-router-dom";

class Privacy extends Component<any,any> {
  constructor(props: Readonly<any>) {
    super(props);
  }

  render() {
    return (
        <iframe style = {{width:'100vw',height:'100vh'}} src={process.env.PUBLIC_URL+"/privacy.html"}></iframe>
    );
  }
}

export default Privacy

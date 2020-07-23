import React, { Component } from "react";

class Agreement extends Component<any, any> {
  render() {
    return (
      <iframe
        title="agreement"
        style={{ width: "100vw", height: "100vh" }}
        src={process.env.PUBLIC_URL + "/agreement.html"}
      ></iframe>
    );
  }
}

export default Agreement;

import React, { Component } from "react";

class Privacy extends Component<any, any> {
  render() {
    return (
      <iframe
        title="privacy"
        style={{ width: "100vw", height: "100vh" }}
        src={process.env.PUBLIC_URL + "/privacy.html"}
      ></iframe>
    );
  }
}

export default Privacy;

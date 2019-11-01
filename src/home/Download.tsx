import React, { Component } from "react";
import "./download.css";
import { isMobile } from "../Util";

class HomePage extends Component<any, any> {
  constructor(props: Readonly<any>) {
    super(props);
    window.onresize = () => {
      if(isMobile()){
        this.props.history.push('/m/download/');
      }
    };
  }

  render() {
    return (
      <div className="root">
        <div className="title">
          萌幻Cos
        </div>
        <div className="summary">海量高清Cos美图尽享</div>
        <img
          className="qrcode"
          src={require("../images/ic_qrcode.png")}
          alt=""
        ></img>
        <div
          className="download"
          onClick={() => {
            window.open(
              "https://wallpager-1251812446.cos.ap-beijing.myqcloud.com/app-debug.apk"
            );
          }}
        >
          立即下载
        </div>
      </div>
    );
  }
}

export default HomePage;

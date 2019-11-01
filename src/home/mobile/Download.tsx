import React, { Component } from "react";
import "../mobile/download.css";
import { isMobile } from "../../Util";

class HomeMobile extends Component<any, any> {
  constructor(props: Readonly<any>) {
    super(props);
    window.onresize = () => {
      if(!isMobile()){
        this.props.history.push('/download/');
      }
    };
  }

  render() {
    return (
      <div>
        <img
          className="left"
          src={require("../../images/download_pattern_left.png")}
          alt="left"
        ></img>
        <img
          className="right"
          src={require("../../images/download_pattern_right.png")}
          alt="right"
        ></img>
        <img
          className="launch_m"
          src={require("../../images/ic_launcher.png")}
          alt=""
        />
        <div className="title_m">
          萌幻Cos
          <img
            src={require("../../images/ic_android.png")}
            style={{
              width: "2rem",
              height: "2rem",
              position: "relative",
              left: "2vw"
            }}
            alt=""
          />
        </div>
        <div className="download_m" onClick = {()=>{window.open('https://wallpager-1251812446.cos.ap-beijing.myqcloud.com/app-debug.apk')}}>
            立即下载
        </div>
      </div>
    );
  }
}

export default HomeMobile;

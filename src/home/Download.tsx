import React, { Component } from "react";
import "./download.css";
import { isMobile } from "../Util";

interface State {
  current: string;
}

class HomePage extends Component<any, State> {
  constructor(props: Readonly<any>) {
    super(props);
    this.state = {
      current: "download",
    };
    window.onresize = () => {
      if (isMobile()) {
        this.props.history.push("/m/download/");
      }
    };
  }

  render() {
    return (
      <div className="root">
        <div className="header">
          <div className="title">萌幻Cos</div>
          <div className="summary">海量高清Cos美图尽享</div>
        </div>

        <img
          className="qrcode"
          src={require("../images/ic_qrcode.png")}
          alt=""
        />
        <div
          className="download"
          onClick={() => {
            window.open(
              "https://wallpager-1251812446.cos.ap-beijing.myqcloud.com/MicroWallPager_release.apk"
            );
          }}
        >
          立即下载
        </div>

        <div className="icp">
          <div>
            Copyright © 2018 - 2020{" "}
            <a
              style={{ color: "white" }}
              href="http://ha.beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer noopener"
            >
              豫ICP备18030831号
            </a>
          </div>
          <div>微梦科技 版权所有</div>
        </div>
      </div>
    );
  }
}

export default HomePage;

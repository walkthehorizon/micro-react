import React, { Component } from "react";
import "../mobile/download.css";
import { isMobile } from "../../Util";
// import axios from "axios";

class HomeMobile extends Component<any, any> {
  constructor(props: Readonly<any>) {
    super(props);
    window.onresize = () => {
      if (!isMobile()) {
        this.props.history.push("/download/");
      }
    };
  }

  componentDidMount(): void {
    // axios.get("https://api.wmmt119.top/micro/gzh/signature?url=" + window.location.href)
    //     .then(function (response: any) {
    //         let json = response.data.data;
    //         console.log(json);
    //         wx.config({
    //             debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //             appId: 'wxeb10ca693233a27c', // 必填，公众号的唯一标识
    //             timestamp: json.timestamp, // 必填，生成签名的时间戳
    //             nonceStr: json.nonceStr, // 必填，生成签名的随机串
    //             signature: json.signature,// 必填，签名
    //             jsApiList: ['updateAppMessageShareData','onMenuShareQQ','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
    //         });
    //         wx.ready(function () {
    //             // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    //             wx.updateAppMessageShareData({
    //                 title: '张三丰', // 分享标题
    //                 desc: '是广东人皇太后', // 分享描述
    //                 link: window.location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //                 imgUrl: 'https://wallpager-1251812446.cos.ap-beijing.myqcloud.com/avatar/1_1576577341796.jpg', // 分享图标
    //                 success: function () {
    //                     // 设置成功
    //                     alert("成功")
    //                 },
    //                 fail: function () {
    //                     alert("失败")
    //                 }
    //             });
    //         });
    //         wx.error(function (res) {
    //             alert(res);
    //             // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    //             console.log(res)
    //         });
    //     })
    //     .catch(function (err: any) {
    //         console.error(err)
    //     });
  }

  render() {
    return (
      <div>
        <img
          className="left"
          src={require("../../images/download_pattern_left.png")}
          alt="left"
        />
        <img
          className="right"
          src={require("../../images/download_pattern_right.png")}
          alt="right"
          onClick={function (event: any) {
            console.log(event.target.getAttribute("src"));
          }}
        />
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
              left: "2vw",
            }}
            alt=""
          />
        </div>
        <div
          className="download_m"
          onClick={() => {
            window.open(
              "https://wallpager-1251812446.cos.ap-beijing.myqcloud.com/MicroWallPager_release.apk"
            );
          }}
        >
          立即下载
        </div>
      </div>
    );
  }
}

export default HomeMobile;

import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";
import axios from "axios";
import "./detail.css";
import { isWechat, isQQ } from "../../Util";

interface Paper {
  id: string;
  url: string;
  title: string;
}

function Wallpaper(props: any) {
  let [paper, setPaper] = useState<Paper>({
    id: "-1",
    url: "",
    title: "",
  });
  const paperId = props.match.params.id;

  useEffect(() => {
    const fetchPapeeDetail = (id: string) => {
      axios
        .get("http://api.wmmt119.top/micro/wallpaper/detail/" + id)
        .then((res: any) => {
          let json = res.data.data;
          setPaper({
            id: json.id,
            url: json.url,
            title: json.title,
          });
          document.title = json.title;
          // const scriptId = document.querySelector("#scriptId");
          if (!isWechat() && !isQQ()) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.id = "scriptId";
            script.src = "//9mo0.t4m.cn/applink.js";
            script.onload = () => {
              // @ts-ignore
              MobLink([
                {
                  el: "",
                  path: "picture/browser",
                  params: {
                    id: json.id,
                  },
                },
              ]);
            };
            document.body.appendChild(script);
          }
          // console.log(json)
        })
        .catch((err: any) => {
          console.log(err);
        });
    };

    fetchPapeeDetail(paperId);
  }, [paperId]);

  return (
    <div id="paper_bg">
      <img id="paper_img" src={paper.url} alt={""} />
      {getOpenApp()}
    </div>
  );

  function getOpenApp() {
    if (!isWechat() && !isQQ()) {
      return null;
    }
    return (
      <Button id="paper_submit" type="ghost" onClick={() => clickSubmit()}>
        打开App
      </Button>
    );
  }

  function clickSubmit() {
    if (isWechat() || isQQ()) {
      showInsideTip();
    } else {
      openApp();
    }
  }

  /**
   * 显示外部浏览器的提示框
   * */
  function showInsideTip() {
    const args = {
      message: "链接打不开？",
      description: "点击右上角按钮\n选择在 “浏览器打开” ",
      duration: 0,
    };
    notification.info(args);
  }

  function openApp() {
    window.location.href = "https://microsee.page.link/H3Ed";
  }
}

export default Wallpaper;

import React, {Component} from "react";
import {Button, notification} from "antd";
import axios from 'axios'
import {isMobile} from "../Util";

interface Paper {
    id: string;
    url: string;
    title: string
}

class Wallpaper extends Component<any, Paper> {

    constructor(props: any) {
        super(props);
        this.state = {
            id: "-1",
            // url: "https://theme-drcn.dbankcdn.com/dl/hitopdl/hitop/wallpaper/FHD/800038459/small_800038459.jpg",
            url: "",
            title: ""
        };
        if (!this.isInsideWeb() && isMobile()) {
            this.openApp()
        }
    }

    componentDidMount(): void {
        axios.get('https://api.wmmt119.top/micro/wallpaper/detail/' + this.props.match.params.id)
            .then((res: any) => {
                let json = res.data.data;
                this.setState({
                    id: json.id,
                    url: json.url,
                    title: json.title
                });
                // console.log(json)
            })
            .catch((err: any) => {
                console.log(err)
            });
    }

    render() {
        document.title = this.state.title;
        return <div id="paper_bg">
            <img id="paper_img"
                 src={this.state.url}
                 alt={""}/>
            <Button id="paper_submit" size={"large"} onClick={() => this.clickSubmit()}>
                进入APP下载</Button>
        </div>
    }

    clickSubmit() {
        if (this.isInsideWeb()) {
            this.showInsideTip()
        } else {
            this.openApp()
        }
    }

    /**
     * 是否微信、qq内部打开
     * */
    isInsideWeb() {
        let ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("micromessenger") !== -1 || ua.indexOf("qq") !== -1;
    }

    /**
     * 显示外部浏览器的提示框
     * */
    showInsideTip() {
        const args = {
            message: '链接打不开？',
            description: '点击右上角按钮\n选择在 “浏览器打开” ',
            duration: 0,
        };
        notification.open(args);
    };

    openApp() {
        window.location.href = "https://microsee.page.link/H3Ed"
    }
}

export default Wallpaper
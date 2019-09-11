import React, {Component} from "react";
import {Button} from "antd";
import axios from 'axios'

interface Paper {
    id: string;
    url: string;
}

class Wallpaper extends Component<any, Paper> {

    constructor(props: any) {
        super(props);
        this.state = {
            id: "-1",
            // url: "https://theme-drcn.dbankcdn.com/dl/hitopdl/hitop/wallpaper/FHD/800038459/small_800038459.jpg",
            url: ""
        };
    }

    componentDidMount(): void {
        axios.get('https://api.wmmt119.top/wallpaper/wallpapers/' + this.props.match.params.id + "/")
            .then((res: any) => {
                let json = res.data.data;
                this.setState({
                    id: json.id,
                    url: json.url,
                });
                // console.log(json)
            })
            .catch((err: any) => {
                console.log(err)
            });
    }

    render() {
        return <div id="paper_bg">
            <img id="paper_img"
                 src={this.state.url}
                 alt={""}/>
            <Button id="paper_submit" size={"large"} onClick={() => this.openApp()}>
                进入APP下载</Button>
        </div>
    }

    openApp() {
        window.location.href = "https://microsee.page.link/H3Ed"
    }
}

export default Wallpaper
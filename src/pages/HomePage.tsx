import React, {Component} from "react";

class HomePage extends Component<any, any> {

    constructor(props: Readonly<any>) {
        super(props);
        window.location.href="https://fir.im/g6mx"
    }

    render() {
        return <div>
            <p>这是项目首页</p>;
        </div>
    }
}

export default HomePage
import {Spin} from "antd";
import React from "react";

export class Loading extends React.Component<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div id="spin-fill">
            <Spin size="large"/>;
        </div>
    }
}

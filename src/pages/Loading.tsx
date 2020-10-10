import { Spin } from "antd";
import React from "react";

function Loading() {
  return (
    <div id="spin-fill">
      <Spin size="large" />
    </div>
  );
}

export default Loading;

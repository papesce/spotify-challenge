import React, { Component } from "react";
import Progress from "./Progress";

class LoadingUser extends Component {
  render() {
    return <Progress status="loading..." />;
  }
}

export default LoadingUser;

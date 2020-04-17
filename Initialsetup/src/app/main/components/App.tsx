import * as React from "react";
import { Component, Fragment } from "react";
import { IUser } from "../types/App";
interface IProps {
  user: IUser;
}
class App extends Component<IProps> {
  render() {
    return (
      <Fragment>
        <h1>HomeApp{this.props.user.email}</h1>
      </Fragment>
    );
  }
}
export default App;

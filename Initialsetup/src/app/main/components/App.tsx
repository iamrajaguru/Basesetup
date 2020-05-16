import * as React from "react";
import { Component, Fragment } from "react";
import { IUser } from "../types/App";
import { Route, Switch } from "react-router-dom";
import history from "../../store/history";
interface IProps {
  user: IUser;
  updateUserInput: (key: string, value: any) => void;
}
interface IState {
  received: boolean;
}
class App extends Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      received: false,
    };
  }
  nav = () => {
    let id = null;
    history.push(`/dashboard`);
  };
  updateOnChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.props.updateUserInput("nos", e.target.value);
  };
  submitNos = () => {
    this.setState({ received: true });

    history.push(`/dashboard`);
  };
  render() {
    console.log(this.props.user.nos, "/:/");
    return (
      <Fragment>
        <div>
          <h1>HomeApp{this.props.user.email}</h1>
          <input
            type="text"
            value={this.props.user.nos}
            onChange={this.updateOnChangeData}
          />
          <button onClick={this.submitNos}>Start</button>
        </div>
      </Fragment>
    );
  }
}
export default App;

import { ConnectedRouter } from "connected-react-router";
import  {History}  from "history";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { Store } from "redux";
import Routing from "../components/Routing";

interface Props {
  store: Store;
  history: History<any>;
}

class Root extends React.Component<Props> {
  public render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routing />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default hot(Root);

import * as invariant from "invariant";
import * as React from "react";
import * as ReactDOM from "react-dom";

import Root from "./containers/Root";
import history from "../store/history";
import store from "../store/index";
const rootElement = document.getElementById("root");
invariant(rootElement != null, "Could not find div with ID #root");
ReactDOM.render(<Root store={store} history={history} />, rootElement);

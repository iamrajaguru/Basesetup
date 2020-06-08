import * as React from "react";
import { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../../admin/containers/AdminDashboard";
import ListItem from "../../admin/containers/HomeDashboard";
import UsersScreen from "../../user/containers/SearchItems";
import App from "../containers/App";
import RecipeFullView from "../../user/containers/RecipeFullView";
class Routing extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route>
            <Route exact={true} path="/" component={App} />
            <Route
              exact={true}
              path={["/dashboard/:id", "/dashboard"]}
              component={AdminDashboard}
            />
            <Route exact={true} path="/list" component={ListItem} />
            <Route exact={true} path="/home" component={UsersScreen} />
            <Route
              exact={true}
              path={"/selectedRecipe/:id"}
              component={RecipeFullView}
            />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}
export default Routing;

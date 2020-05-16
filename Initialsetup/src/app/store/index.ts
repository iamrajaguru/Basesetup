import { routerMiddleware } from "connected-react-router";
// import { createStore } from "redux-dynamic-modules";
import ThunkMiddleware from "redux-thunk";
// import { getThunkExtension } from "redux-dynamic-modules-thunk";
import UserState from "../main/reducers/App";
import DashboardState from "../admin/reducers/AdminDashboard";
import HomeState from "../admin/reducers/HomeDashboard";
import UserFunctions from "../user/reducers/SearchItems";
import history from "./history";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
const router_middleware = routerMiddleware(history);

const combine = combineReducers({
  router: connectRouter(history),
  UserState,
  DashboardState,
  HomeState,
  UserFunctions,
});
export type RootState = ReturnType<typeof combine>;
export default createStore(
  combine,
  applyMiddleware(ThunkMiddleware, router_middleware)
);

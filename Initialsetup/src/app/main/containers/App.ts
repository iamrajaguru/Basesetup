import { connect } from "react-redux";
import App from "../components/App";
// import { IUser } from "../types/App";
// import { connectRouter, RouterState } from "connected-react-router";
import {RootState }from "../../store/index"

const mapStateToProps = (state: RootState) => ({
  user: state.UserState,
});

export default connect(mapStateToProps)(App);

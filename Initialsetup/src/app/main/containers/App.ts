import { connect } from "react-redux";
import App from "../components/App";
// import { IUser } from "../types/App";
// import { connectRouter, RouterState } from "connected-react-router";
import { RootState } from "../../store/index";
import { updateUserInput } from "../actions/App";
const mapStateToProps = (state: RootState) => ({
  user: state.UserState,
});

const mapDispatchToProps = {
  updateUserInput,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

import { connect } from "react-redux";
import SearchItems from "../components/SearchItems";
import { RootState } from "../../store/index";
// import { updateUserInput } from "../actions/SearchItems";
const mapStateToProps = (state: RootState) => ({
  user: state.UserState,
  userScreen: state.UserFunctions,
});

const mapDispatchToProps = {
  // updateUserInput,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchItems);

import { connect } from "react-redux";
import SearchItems from "../components/SearchItems";
import { RootState } from "../../store/index";
import {
  updateInputField,
  getList,
  updateItemList,
} from "../actions/SearchItems";
const mapStateToProps = (state: RootState) => ({
  user: state.UserState,
  userScreen: state.UserFunctions,
});

const mapDispatchToProps = {
  updateInputField,
  getList,
  updateItemList,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchItems);

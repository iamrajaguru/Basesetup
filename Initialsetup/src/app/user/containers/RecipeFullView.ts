import { connect } from "react-redux";
import RecipieFullView from "../components/RecipieFullView";
import { RootState } from "../../store/index";
import {
  updateInputField,
  getList,
  updateItemList,
  getDispatch,
  getItemAndLoad,
} from "../actions/SearchItems";
import { IRoleRouteProps } from "../types/user";
const mapStateToProps = (state: RootState, ownProps: IRoleRouteProps) => ({
  user: state.UserState,
  userScreen: state.UserFunctions,
  match: ownProps.match,
});

const mapDispatchToProps = {
  updateInputField,
  getList,
  updateItemList,
  getDispatch,
  getItemAndLoad,
};
export default connect(mapStateToProps, mapDispatchToProps)(RecipieFullView);

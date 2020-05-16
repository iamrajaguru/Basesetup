import { connect } from "react-redux";
import { IRoleRouteProps } from "../types/AdminDashboard";
import AdminDashboard from "../components/AdminDashboard";
import { RootState } from "../../store/index";
import {
  updateUserInput,
  add_Ingredient,
  submitNewRecipe,
  add_Steps,
  getItemAndLoad,
  updateItemSubmit,
} from "../actions/AdminDashboard";
const mapStateToProps = (state: RootState, ownProps: IRoleRouteProps) => ({
  user: state.UserState,
  adminFood: state.DashboardState,
  match: ownProps.match,
});

const mapDispatchToProps = {
  updateUserInput,
  add_Ingredient,
  submitNewRecipe,
  add_Steps,
  getItemAndLoad,
  updateItemSubmit,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);

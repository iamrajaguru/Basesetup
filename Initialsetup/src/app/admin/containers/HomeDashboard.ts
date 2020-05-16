import { connect } from "react-redux";
import ListItem from "../components/ListItem";
import { RootState } from "../../store/index";
import { updateUserInput } from "../actions/AdminDashboard";
import { getList, updateItemList, deleteItem } from "../actions/HomeDashboard";
const mapStateToProps = (state: RootState) => ({
  user: state.UserState,
  home: state.HomeState,
});

const mapDispatchToProps = {
  updateItemList,
  getList,
  deleteItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);

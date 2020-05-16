import { IList, IItems } from "../types/AdminDashboard";

const initialState: IList = {
  itemList: [],
};
export default (state: IList = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_LIST":
      return { ...state, itemList: action.value };

    default:
      return state;
  }
};

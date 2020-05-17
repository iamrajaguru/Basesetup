import { ISearchFields } from "../types/user";
const initialState: ISearchFields = {
  userInput: "",
  searchBy: "",
  selectionType: [
    {
      key: "Name",
      value: "Name",
    },
    {
      key: "Ingredients",
      value: "Ingredients",
    },
    {
      key: "Variety",
      value: "Variety",
    },
    {
      key: "Category",
      value: "Category",
    },
  ],
  itemList: [],
};

export default (state: ISearchFields = initialState, action: any) => {
  switch (action.type) {
    case "USER_INPUT":
      return { ...state, [action.key]: action.value };
    case "UPDATE_LIST":
      return { ...state, itemList: action.value };
    default:
      return state;
  }
};

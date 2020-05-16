import { ISearchFields } from "../types/user";
const initialState: ISearchFields = {
  // searchByName: "",
  // searchByIngredients: "",
  // searchByCategory: "",
  // searchByVariety: "",
  // searchType: "",
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
};

export default (state: ISearchFields = initialState, action: any) => {
  switch (action.type) {
    // case "":
    //   return { ...state };
    default:
      return state;
  }
};

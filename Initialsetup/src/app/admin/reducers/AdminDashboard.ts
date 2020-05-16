import { IFoodManipulation } from "../types/AdminDashboard";

const initialState: IFoodManipulation = {
  food: {
    itemName: "",
    variety: "",
    category: "veg",
    ingredients: [],
    procedure: [],
    tempIng: "",
    tempSteps: "",
    image: null,
  },
};

export default (state: IFoodManipulation = initialState, action: any) => {
  switch (action.type) {
    case "GET_UPDATE":
      console.log(action.value, "LLKLK");
      return { ...state, food: action.value };
    case "UPDATE_INPUT":
      return { ...state, food: { ...state.food, [action.key]: action.value } };
    case "ADD_INGREDIENT":
      let temp: any = state.food.ingredients;
      console.log("action", action.value);
      temp.push(action.value);
      console.log("temp", temp);
      return { ...state, food: { ...state.food, ingredients: temp } };
    case "ADD_STEPS":
      let steps: any = state.food.procedure;
      console.log("action", action.value);
      steps.push(action.value);
      console.log("steps", steps);
      return { ...state, food: { ...state.food, procedure: steps } };
    default:
      return state;
  }
};

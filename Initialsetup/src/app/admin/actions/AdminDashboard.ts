import { IFood, IFoodManipulation } from "../types/AdminDashboard";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
export const updateUserInput = (key: keyof IFood, value: any) => ({
  type: "UPDATE_INPUT",
  key,
  value,
});
export const getDispatch = (value: object) => ({
  type: "GET_UPDATE",
  value,
});
export const add_Ingredient = (value: string) => ({
  type: "ADD_INGREDIENT",
  value,
});
export const add_Steps = (value: string) => ({
  type: "ADD_STEPS",
  value,
});
export const submitNewRecipe = (
  food: IFood
): ThunkAction<void, IFood, null, Action<string>> => async (
  dispatch: Dispatch
) => {
  const formData = new FormData();
  let foods = {
    food,
  };
  formData.append("food", JSON.stringify(foods));
  // formData.append("variety", food.variety);
  // formData.append("category", food.category);
  // formData.append("ingredients", JSON.stringify(food.ingredients));
  // formData.append("procedure", JSON.stringify(food.procedure));
  // formData.append("procedure", JSON.stringify(food.procedure));
  formData.append("file", food.image.raw);
  let response = await axios.post("http://localhost:3000/food/add", formData);
  console.log(response.data, ":{_}:");
};

export const getItemAndLoad = (
  id: string
): ThunkAction<void, IFood, null, Action<string>> => async (
  dispath: Dispatch
) => {
  console.log("Action");
  let response = await axios.get(`http://localhost:3000/food/getbyid/${id}`);
  dispath(getDispatch(response.data));
  console.log(response.data, "no");
};

export const updateItemSubmit = (
  food: IFood
): ThunkAction<void, IFood, null, Action<string>> => async (
  dispatch: Dispatch
) => {
  console.log("updateAction");
  let response = await axios.post("http://localhost:3000/food/update", food);
  console.log(response.data, "::");
};

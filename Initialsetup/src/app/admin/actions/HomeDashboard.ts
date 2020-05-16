import { IFood, IFoodManipulation } from "../types/AdminDashboard";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
export const updateItemList = (value: []) => ({
  type: "UPDATE_LIST",
  value,
});
export const getList = (): ThunkAction<
  void,
  IFood,
  null,
  Action<string>
> => async (dispatch: Dispatch) => {
  let response = await axios.get("http://localhost:3000/food/getall");
  console.log("async call", response.data);
  dispatch(updateItemList(response.data));
};
export const deleteItem = (
  id: string
): ThunkAction<void, IFood, null, Action<string>> => async (
  dispatch: Dispatch
) => {
  console.log("Delete Item");
  let response = await axios.get(`http://localhost:3000/food/delete/${id}`);
  console.log(response.data);
};

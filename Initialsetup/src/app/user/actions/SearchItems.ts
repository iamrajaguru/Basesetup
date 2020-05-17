import { ISearchFields } from "../types/user";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
export const updateInputField = (key: string, value: string) => ({
  type: "USER_INPUT",
  key,
  value,
});
export const updateItemList = (value: []) => ({
  type: "UPDATE_LIST",
  value,
});
export const getList = (): ThunkAction<
  void,
  ISearchFields,
  null,
  Action<string>
> => async (dispatch: Dispatch) => {
  let response = await axios.get("http://localhost:3000/food/getall");
  console.log("async call", response.data);
  dispatch(updateItemList(response.data));
};

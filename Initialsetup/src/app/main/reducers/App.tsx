import { IUser } from "../types/App";
const initialState: IUser = {
  username: "",
  password: "",
  conformPassword: "",
  email: "xcx",
  mobile: "",
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

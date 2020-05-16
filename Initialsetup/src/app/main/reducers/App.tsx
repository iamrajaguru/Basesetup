import { IUser } from "../types/App";
const initialState: IUser = {
  username: "",
  password: "",
  conformPassword: "",
  email: "xcx",
  mobile: "",
  nos: 0,
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return { ...state, [action.key]: action.value };
    default:
      return { ...state };
  }
};

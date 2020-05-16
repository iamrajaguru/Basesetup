import * as React from "react";
import { Component, Fragment } from "react";
import history from "../../store/history";
import {
  IFoodManipulation,
  IFood,
  IRoleRouteProps,
} from "../types/AdminDashboard";
interface IProps extends IRoleRouteProps {
  adminFood: IFoodManipulation;
  updateUserInput: (key: keyof IFood, value: any) => void;
  add_Ingredient: (value: string) => void;
  submitNewRecipe: (food: IFood) => void;
  add_Steps: (value: string) => void;
  getItemAndLoad: (id: string) => void;
  updateItemSubmit: (food: IFood) => void;
}

class AdminDashboard extends Component<IProps> {
  componentDidMount() {
    if (this.props.match.params.id)
      this.props.getItemAndLoad(this.props.match.params.id);
  }
  updateOnChangeData = (field: keyof IFood) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(e.target.value);
    this.props.updateUserInput(field, e.target.value);
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  public handleInc = () => {
    if (this.props.adminFood.food.tempIng !== "") {
      this.props.add_Ingredient(this.props.adminFood.food.tempIng);
      this.props.updateUserInput("tempIng", "");
    }
  };
  handleSteps = () => {
    if (this.props.adminFood.food.tempSteps !== "") {
      this.props.add_Steps(this.props.adminFood.food.tempSteps);
      this.props.updateUserInput("tempSteps", "");
    }
  };
  handlePicker = (e: any) => {
    console.log(e.target.files, "handle Picker");
    if (e.target.files.length) {
      let img = {
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      };
      // const formData = new FormData();
      // formData.append("file", img.raw);

      this.props.updateUserInput("image", img);
    }
  };
  removeIng = (index: number) => () => {
    let arr = this.props.adminFood.food.ingredients;
    arr.splice(index, 1);
    this.props.updateUserInput("ingredients", arr);
  };
  removeProc = (index: number) => () => {
    let myarr = this.props.adminFood.food.procedure;
    myarr.splice(index, 1);
    this.props.updateUserInput("procedure", myarr);
  };
  radioCheck = (category: string) => () => {
    this.props.updateUserInput("category", category);
  };
  submitNos = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    this.props.submitNewRecipe(this.props.adminFood.food);
    history.push("/list");
  };
  updateItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    this.props.updateItemSubmit(this.props.adminFood.food);
  };
  render() {
    console.log(this.props.adminFood.food, "getted");
    return (
      <Fragment>
        <div className="container mt-5">
          <form>
            <div className="form-group">
              <strong>Item Name</strong>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                value={this.props.adminFood.food.itemName}
                onChange={this.updateOnChangeData("itemName")}
              />
            </div>
            <div className="form-group">
              <strong>Steps</strong>
              <input
                type="text"
                className="form-control"
                value={this.props.adminFood.food.tempSteps}
                onChange={this.updateOnChangeData("tempSteps")}
              />
            </div>
            <button
              type="button"
              onClick={this.handleSteps}
              className="btn btn-primary"
            >
              Add
            </button>

            {this.props.adminFood.food.procedure &&
              this.props.adminFood.food.procedure.map(
                (i: any, index: number) => (
                  <div className="dirMap" key={index}>
                    <span className="chips">
                      {i}
                      <div onClick={this.removeProc(index)}>
                        <i className="pl-2 fas fa-minus-circle"></i>
                      </div>
                    </span>
                  </div>
                )
              )}
            <div className="form-group">
              <strong>Ingredients</strong>
              <input
                type="text"
                className="form-control"
                value={this.props.adminFood.food.tempIng}
                onChange={this.updateOnChangeData("tempIng")}
              />
            </div>

            <button
              type="button"
              onClick={this.handleInc}
              className="btn btn-primary"
            >
              Add
            </button>

            {this.props.adminFood.food.ingredients &&
              this.props.adminFood.food.ingredients.map(
                (i: any, index: number) => (
                  <div className="dirMap" key={index}>
                    <span className="chips">
                      {i}
                      <div onClick={this.removeIng(index)}>
                        <i className="pl-2 fas fa-minus-circle"></i>
                      </div>
                    </span>
                  </div>
                )
              )}
            <div className="form-group">
              <strong>Category</strong>
              <br />
              <input
                type="radio"
                id="male"
                defaultChecked={true}
                onChange={this.radioCheck("veg")}
                name="category"
                value="Veg"
              />
              <label>Veg</label>
              <br />
              <input
                type="radio"
                id="female"
                onChange={this.radioCheck("nonveg")}
                name="category"
                value="NonVeg"
              />
              <label>NonVeg</label>
            </div>
            <div className="form-group">
              <strong>Variety</strong>
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.adminFood.food.variety}
                onChange={this.updateOnChangeData("variety")}
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                onChange={this.handlePicker}
                id="myFile"
                name="filename"
              />
            </div>
            {this.props.match.params.id != undefined ? (
              <button
                type="submit"
                onClick={this.updateItem}
                className="btn btn-primary"
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                onClick={this.submitNos}
                className="btn btn-primary"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </Fragment>
    );
  }
}
export default AdminDashboard;

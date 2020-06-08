import * as React from "react";
import { Component, Fragment } from "react";
import { ISearchFields } from "../types/user";
import { Link } from "react-router-dom";
import history from "../../store/history";
interface IProps {
  userScreen: ISearchFields;
  updateInputField: (key: string, value: string) => void;
  getList: () => void;
}
class SearchItems extends Component<IProps> {
  componentDidMount() {
    this.props.getList();
  }
  // private changeCall = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   console.log(e.target.value);
  // };
  private updateUserInput = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(key, e.target.value);
    this.props.updateInputField(key, e.target.value);
  };
  submitNos = (id: string) => (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push(`/selectedRecipe/${id}`);
  };
  render() {
    console.log(this.props.userScreen, "user");
    return (
      <Fragment>
        <div className="container ">
          <div className="p-5 d-flex justify-content-center">
            <input
              type="text"
              className="ibox"
              value={this.props.userScreen.userInput}
              onChange={this.updateUserInput("userInput")}
            />
            <select
              className="btn btn-primary"
              onChange={this.updateUserInput("searchBy")}
              id="selection"
            >
              {/* <option value="Select">Select</option> */}
              {this.props.userScreen.selectionType.map(
                (i: any, index: number) => (
                  <option key={index} value={i.value}>
                    {i.key}
                  </option>
                )
              )}
            </select>
          </div>
          <div></div>
          <hr />
          <div className="row">
            {this.props.userScreen.itemList.map((i: any, index: number) => (
              <div
                key={index}
                className="col-3 rl card"
                onClick={() => this.submitNos(i._id)}
              >
                <Link to={`/selectedRecipe/${i._id}`}>
                  <img src={i.pics} className="imgStyle" />
                  <div className="overlay">
                    <div className="textOnImg">NameCheck</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchItems;

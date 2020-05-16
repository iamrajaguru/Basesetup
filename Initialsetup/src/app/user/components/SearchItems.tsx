import * as React from "react";
import { Component, Fragment } from "react";
import { ISearchFields } from "../types/user";
interface IProps {
  userScreen: ISearchFields;
}
class SearchItems extends Component<IProps> {
  private changeCall = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  render() {
    console.log(this.props.userScreen, "user");
    return (
      <Fragment>
        <select
          className="btn btn-primary"
          onChange={this.changeCall}
          id="selection"
        >
          {/* <option value="Select">Select</option> */}
          {this.props.userScreen.selectionType.map((i: any, index: number) => (
            <option key={index} value={i.value}>
              {i.key}
            </option>
          ))}
        </select>

        {/* <input type="submit"> */}
      </Fragment>
    );
  }
}
export default SearchItems;

import * as React from "react";
import { Component, Fragment } from "react";
import { ISearchFields } from "../types/user";
import { Link } from "react-router-dom";
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
  render() {
    console.log(this.props.userScreen, "user");
    return (
      <Fragment>
        <div className="container">
          <input
            type="text"
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
          <hr />
          {this.props.userScreen.itemList.map((i: any, index: number) => (
            <div key={index} className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="con-1">
                    <small>Name</small>
                    <small>{i.itemName} </small>
                  </div>
                </div>

                <div className="col-md-6">
                  <img
                    src={i.pics}
                    // style={{ height: "50px", width: "50px" }}
                    className="imgStyle"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
{
  /* 
          //heretest
          {this.props.userScreen.itemList.map((i: any, index: number) => (
            <div key={index} className="card">
              <div>{i.itemName}</div>
              <div>
                {i.procedure.map((p: any, index: number) => (
                  <table key={index}>
                    <tbody>
                      <tr>
                        <td>{p}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
              <div>
                {i.ingredients.map((p: any, index: number) => (
                  <table key={index}>
                    <tbody>
                      <tr>
                        <td>{p}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>

              {i.pics ? (
                <div>
                  <img
                    src={i.pics}
                    // style={{ height: "50px", width: "50px" }}
                    className="imgStyle"
                  />
                  {console.log(i.pics)}
                </div>
              ) : null}
            </div>
          ))}//test ends */
}
{
  /* <input type="submit"> */
}
//   </div>
// </Fragment>
//     );
//   }
// }
export default SearchItems;

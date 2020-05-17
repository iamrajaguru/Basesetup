import * as React from "react";
import { Component, Fragment } from "react";

import { IItems, IList, IFood } from "../types/AdminDashboard";
import { Link } from "react-router-dom";
interface IProps {
  home: IList;
  updateItemList: (value: []) => void;
  getList: () => void;
  deleteItem: (id: string) => void;
}

export default class ListItem extends Component<IProps> {
  componentDidMount() {
    this.props.getList();
  }
  readyList = (listed: IItems[]) => {
    listed.map((i: any, index: number) => (
      <tr>
        <td>index</td>
        <td>i.itemName</td>
        <td>i.procedure</td>
        <td>i.ingredients</td>
      </tr>
    ));
  };
  deleteSelected = (id: string) => () => {
    console.log("-kj");
    this.props.deleteItem(id);
    this.props.getList();
  };
  render() {
    console.log(this.props.home.itemList);
    return (
      <div>
        <div className="container ">
          <table className="table table-hover ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">steps</th>
                <th scope="col">Ingredients</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {this.props.home.itemList.map((i: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i.itemName}</td>
                  <td>
                    {i.procedure.map((p: any, index: number) => (
                      <table key={index}>
                        <tbody>
                          <tr>
                            <td>{p}</td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                  </td>
                  <td>
                    {i.ingredients.map((p: any, index: number) => (
                      <table key={index}>
                        <tbody>
                          <tr>
                            <td>{p}</td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                  </td>
                  <td>
                    <Link to={`/dashboard/${i._id}`}>
                      <i
                        // onClick={this.editItem(i)}
                        className="p-2 fa fa-edit"
                      ></i>
                    </Link>
                    <i
                      className="fa fa-trash-alt"
                      onClick={this.deleteSelected(i._id)}
                    ></i>
                  </td>
                  {i.pics ? (
                    <td>
                      <img
                        src={i.pics}
                        // style={{ height: "50px", width: "50px" }}
                        className="imgStyle"
                      />
                      {console.log(i.pics)}
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

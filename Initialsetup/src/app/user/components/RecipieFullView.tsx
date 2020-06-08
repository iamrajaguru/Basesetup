import * as React from "react";
import { Component, Fragment } from "react";
import { ISearchFields, IRoleRouteProps } from "../types/user";
import { Link } from "react-router-dom";
interface IProps extends IRoleRouteProps {
  userScreen: ISearchFields;
  getItemAndLoad: (id: string) => void;
  //   getList: () => void;
}
class RecipeFullView extends Component<IProps> {
  componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id, "id");
      this.props.getItemAndLoad(this.props.match.params.id);
    }
  }
  render() {
    const recipe = this.props.userScreen.itemrecipe;
    const env = "http://localhost:8080/";
    return (
      <Fragment>
        <div className="Customcontainer pt-5">
          <div className="container pt-5">
            <h1 className="text-center pb-5">{recipe.itemName}</h1>

            <div className="row ">
              <div className="col-sm-12 col-md-6  imgConatiner align-self-center">
                <img src={`${env}${recipe.pics}`} className="gridImage" />
              </div>
              <div className="col-sm-12 col-md-6 mt-5">
                <div className="ingredientsBox  ml-1">
                  <h4 className="sub-title">INGREDIENTS</h4>
                  <ul className="fa-ul">
                    {" "}
                    {recipe.ingredients.map((i: any) => (
                      <li className="points" key={i}>
                        <i className="fa-li fas fa-utensils"></i> {i}
                      </li>
                    ))}{" "}
                  </ul>
             
                <br />
                <div className="Steps">
                  <h4 className="sub-title">PROCEDURE</h4>
                  <ul className="fa-ul">
                    {recipe.procedure.map((i: any) => (
                      <li className="points" key={i}>
                        <i className="fa-li fas fa-utensils"></i> {i}
                      </li>
                    ))}{" "}
                  </ul>
                  </div>   </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RecipeFullView;

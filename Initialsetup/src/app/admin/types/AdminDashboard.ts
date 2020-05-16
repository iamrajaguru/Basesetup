export interface IFoodManipulation {
  food: IFood;
}

export interface IFood {
  itemName: string;
  variety: string;
  category: string;
  ingredients: [];
  procedure: [];
  tempIng: string;
  tempSteps: string;
  image: any | null;
}

export interface IList {
  itemList: IItems[];
}
export interface IItems {
  _id: string;
  itemName: string;
  variety: string;
  category: string;
  ingredients: [];
  procedure: [];
  tempIng: string;
  tempSteps: string;
}

export interface IRoleRouteProps {
  match: {
    params: {
      id: string | undefined;
    };
  };
}
